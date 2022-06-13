import {
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsYoutube,
    BsLinkedin,
} from 'react-icons/bs';

const base_link_style = 'block py-2 px-4 text-sm';

const header_styles = {
    dropdown_link: `${base_link_style} text-gray-700 hover:bg-gray-100`,
    home_link: `${base_link_style} text-lg text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0`,
    link: `${base_link_style} text-lg text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`,
};
const lang_elements = [];
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
            link: '/',
        },
        {
            name: 'About',
            style_attr: 'link',
            link: '/aboutus',
        },
        {
            name: 'How it Works',
            style_attr: 'link',
            link: 'how-it-works',
        },
        // {
        //     name: 'Profile',
        //     style_attr: 'link',
        //     link: '/profile',
        // },
    ],
};

const footer_styles = {
    sm_link: 'text-gray-500 hover:text-gray-900 ',
};

const social_media = [
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsYoutube,
    BsLinkedin,
];
const footer_items = {
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

export {
    header_styles,
    nav_elements,
    footer_styles,
    social_media,
    footer_items,
};
