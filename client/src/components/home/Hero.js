import React from 'react';
import Carousel from '../../classes/Carousel';
import test from '../../assets/images/test.jpg';

const items = [
    {
        image: test,
        alt: '...',
    },
    {
        image: test,
        alt: '...',
    },
    {
        image: test,
        alt: '...',
    },
    {
        image: test,
        alt: '...',
    },
];

const styles = {
    carousel_button:
        'flex absolute top-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none',
    carousel_button_span:
        'inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none',
};

const Hero = () => {
    const carousel = new Carousel(items, {});
    return (
        <div id='animation-carousel' class='relative' data-carousel='static'>
            <div class='overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-96'></div>
            {carousel.elements.map((item, idx) => {
                return (
                    <div
                        key={idx}
                        class={`${
                            idx === carousel.el_id ? '' : 'hidden'
                        } duration-200 ease-linear relative p-4`}
                        data-carousel-item='active'
                    >
                        <img
                            src={item.image}
                            class='block absolute object-contain top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 '
                            alt='...'
                        />
                    </div>
                );
            })}
            <button
                type='button'
                class={`${styles['carousel_button']} left-0`}
                data-carousel-prev
            >
                <span class={styles['carousel_button_span']}>
                    <svg
                        class='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M15 19l-7-7 7-7'
                        ></path>
                    </svg>
                    <span class='hidden'>Previous</span>
                </span>
            </button>
            <button
                type='button'
                class={`${styles['carousel_button']} right-0`}
                data-carousel-next
            >
                <span class={styles['carousel_button_span']}>
                    <svg
                        class='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M9 5l7 7-7 7'
                        ></path>
                    </svg>
                    <span class='hidden'>Next</span>
                </span>
            </button>
        </div>
    );
};

export default Hero;
