import React from 'react';
import logo from '../../assets/images/logo.png';
import {
    footer_styles as styles,
    footer_items as items,
    social_media,
} from './data';

const Footer = () => {
    return (
        <footer className='p-4 bg-white sm:p-6 '>
            <div className='md:flex md:justify-between'>
                <div className='mb-6 md:mb-0'>
                    <a href='/#' className='flex items-center'>
                        <img src={logo} className='mr-3 h-8' alt='Logo' />
                        <span className='self-center text-2xl font-semibold whitespace-nowrap '>
                            Name
                        </span>
                    </a>
                </div>
                <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
                    {items.footer.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase '>
                                    {item.name}
                                </h2>
                                <ul className='text-gray-600 '>
                                    {item.links.map((it, idx) => {
                                        return (
                                            <li key={idx} className='mb-4'>
                                                <a
                                                    href={it.link}
                                                    className='hover:underline'
                                                >
                                                    {it.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
            <hr className='my-6 border-gray-200 sm:mx-auto  lg:my-8' />
            <div className='sm:flex sm:items-center sm:justify-between'>
                <span className='text-sm text-gray-500 sm:text-center '>
                    © 2022{' '}
                    <a href='https://flowbite.com' className='hover:underline'>
                        Name
                    </a>
                    . All Rights Reserved.
                </span>
                <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
                    {social_media.map((svg, idx) => {
                        return (
                            <a
                                key={idx}
                                href='/#'
                                className={styles['sm_link']}
                            >
                                <img src={svg} alt='' />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
