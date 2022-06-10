import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.png';
import DropdownBtn from '../util/buttons/DropdownBtn';
import { header_styles as styles, nav_elements } from './data';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded  overflow-auto'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <a href='/' className='flex items-center'>
                    <img src={logo} className='mr-3 h-6 sm:h-9' alt='Logo' />
                    <span className='self-center text-xl font-semibold whitespace-nowrap '>
                        Name
                    </span>
                </a>
                <div className='flex items-center md:order-2'>
                    <button
                        type='button'
                        className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 '
                        id='user-menu-button'
                        aria-expanded='false'
                        data-dropdown-toggle='dropdown'
                    >
                        <span className='sr-only'>Open user menu</span>
                        <img
                            className='w-8 h-8 rounded-full'
                            src={avatar}
                            alt='user'
                            onClick={() => setProfileOpen(false)}
                        />
                    </button>

                    <div
                        className={`${
                            !profileOpen ? 'hidden' : ''
                        } z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow `}
                        id='dropdown'
                        style={{
                            position: 'absolute',
                            inset: 'auto auto 0px 0px',
                            margin: '0px',
                            transform: 'translate(1246px, 765px)',
                        }}
                        data-popper-reference-hidden=''
                        data-popper-escaped=''
                        data-popper-placement='top'
                    >
                        <div className='py-3 px-4'>
                            <span className='block text-sm text-gray-900 '>
                                Bonnie Green
                            </span>
                            <span className='block text-sm font-medium text-gray-500 truncate '>
                                name@flowbite.com
                            </span>
                        </div>
                        <ul className='py-1' aria-labelledby='dropdown'>
                            {nav_elements['dropdown_nav'].map((li, idx) => {
                                return (
                                    <li key={idx}>
                                        <a
                                            href='/'
                                            className={styles['dropdown_link']}
                                        >
                                            {li.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <DropdownBtn open={navbarOpen} setOpen={setNavbarOpen} />
                </div>
                <div
                    className={`${
                        navbarOpen ? '' : 'hidden'
                    }  justify-between items-center w-full md:flex md:w-auto md:order-1`}
                    id='mobile-menu-2'
                >
                    <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
                        {nav_elements['nav'].map((li, idx) => {
                            return (
                                <li key={idx}>
                                    <a
                                        href={li['link']}
                                        className={styles[li['style_attr']]}
                                        aria-current='page'
                                    >
                                        {li['name']}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
