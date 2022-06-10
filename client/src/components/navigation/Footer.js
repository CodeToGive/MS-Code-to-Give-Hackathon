import React from 'react';
import logo from '../../assets/images/logo.png';
import dribble from '../../assets/icons/svgs/dribble.svg';
import facebook from '../../assets/icons/svgs/facebook.svg';
import github from '../../assets/icons/svgs/github.svg';
import instagram from '../../assets/icons/svgs/instagram.svg';
import twitter from '../../assets/icons/svgs/twitter.svg';

const styles = {
    sm_link: 'text-gray-500 hover:text-gray-900 ',
};

const social_media = [facebook, instagram, twitter, github, dribble];
const items = {
    footer: [
        {
            name: 'Resources',
            links: [
                { name: 'Flowbite', link: 'https://flowbite.com' },
                { name: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
            ],
        },
        {
            name: 'Follow us',
            links: [
                {
                    name: 'Github',
                    link: 'https://github.com/themesberg/flowbite',
                },
                { name: 'Discord', link: 'https://discord.gg/4eeurUVvTy' },
            ],
        },
        {
            name: 'Legal',
            links: [
                { name: 'Privacy Policy', link: '#' },
                { name: 'Terms & Conditions', link: '#' },
            ],
        },
    ],
};

const Footer = () => {
    return (
        <footer class='p-4 bg-white sm:p-6 '>
            <div class='md:flex md:justify-between'>
                <div class='mb-6 md:mb-0'>
                    <a href='#' class='flex items-center'>
                        <img src={logo} class='mr-3 h-8' alt='Logo' />
                        <span class='self-center text-2xl font-semibold whitespace-nowrap '>
                            Name
                        </span>
                    </a>
                </div>
                <div class='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
                    {items.footer.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <h2 class='mb-6 text-sm font-semibold text-gray-900 uppercase '>
                                    {item.name}
                                </h2>
                                <ul class='text-gray-600 '>
                                    {item.links.map((it, idx) => {
                                        return (
                                            <li key={idx} class='mb-4'>
                                                <a
                                                    href={it.link}
                                                    class='hover:underline'
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
            <hr class='my-6 border-gray-200 sm:mx-auto  lg:my-8' />
            <div class='sm:flex sm:items-center sm:justify-between'>
                <span class='text-sm text-gray-500 sm:text-center '>
                    © 2022{' '}
                    <a href='https://flowbite.com' class='hover:underline'>
                        Name
                    </a>
                    . All Rights Reserved.
                </span>
                <div class='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
                    {social_media.map((svg, idx) => {
                        return (
                            <a key={idx} href='#' class={styles['sm_link']}>
                                <img src={svg} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
