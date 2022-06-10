import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png';
import login from '../assets/images/login.jpg';
import DropdownBtn from './util/DropdownBtn';
import { Login } from './Login';
import { Link } from 'react-router-dom';
import { Routes,Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

const styles = {
    dropdown_link:
        'block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white',
    home_link:
        'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white',
    link: 'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700',
};

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(true);
    const nav_elements = {
        dropdown_nav: [
            {
                name: 'Dashboard',
            },
            {
                name: 'Settings',
            },
            {
                name: 'Earnings',
            },
            {
                name: 'Sign out',
            },
        ],
        nav: [
            {
                name: 'Home',
                style_attr: 'home_link',
            },
            {
                name: 'About',
                style_attr: 'link',
            },
            {
                name: 'Services',
                style_attr: 'link',
            },
            {
                name: 'Pricing',
                style_attr: 'link',
            },
            {
                name: 'Contact',
                style_attr: 'link',
            },
        ],
    };

    return (
        <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 overflow-auto'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <a href='/' className='flex items-center'>
                    <img src={logo} className='mr-3 h-6 sm:h-9' alt='Logo' />
                    <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                        Name
                    </span>
                </a>
                <div className='flex items-center md:order-2'>
                    <button
                        type='button'
                        className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
                        id='user-menu-button'
                        aria-expanded='false'
                        data-dropdown-toggle='dropdown'
                    >
                        <span className='sr-only'>Open user menu</span>
                        <img
                            className='w-8 h-8 rounded-full'
                            src={avatar}
                            alt='user'
                            onClick={() => setProfileOpen(true)}
                        />
                        
                    </button>
                    <button
                        type='button'
                        className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
                        id='user-menu-button'
                        aria-expanded='false'
                        data-dropdown-toggle='dropdown'
                    >
                        <span className='sr-only'>Open user menu</span>
                        <Link to="/Login">
                            <img
                                className='w-8 h-8 rounded-full'
                                src={login}
                                alt='user'
                                onClick={Login}
                            />
                        </Link>
                    </button>

                    <div
                        className={`${
                            profileOpen ? 'hidden' : ''
                        } z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
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
                            <span className='block text-sm text-gray-900 dark:text-white'>
                                Bonnie Green
                            </span>
                            <span className='block text-sm font-medium text-gray-500 truncate dark:text-gray-400'>
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
                                        href='/'
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
