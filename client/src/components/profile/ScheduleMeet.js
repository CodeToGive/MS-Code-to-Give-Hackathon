import React from 'react';
import { schedule_meet_styles as styles } from './data';

const ScheduleMeet = () => {
    return (
        <>
            <h1 className='text-4xl font-mono m-5'>Schedule Meet</h1>
            <div className='container flex items-stretch items-center justify-center'>
            
            <a
                href='/#'
                className='flex divide-x w-4/5 p-6 bg-pink rounded-lg border border-gray-200 shadow-md  bg-gray-100'
            >
                <div className='p-6'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
                        Offline Meet
                    </h5>
                    <p className='font-normal text-gray-700 '>
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                    </p>
                    <br></br>
                    <a href='/#' className={styles['links']}>
                       Confirm appointment
                        <svg
                            className='ml-2 -mr-1 w-4 h-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fillRule='evenodd'
                                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                                clipRule='evenodd'
                            ></path>
                        </svg>
                    </a>
                </div>
                <div className='p-6'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
                        Online Meet
                    </h5>
                    <p className='font-normal text-gray-700 '>
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                    </p>
                    <br></br>
                    <div className='flex gap-10 items-center justify-center'>
                        <a href='/#' className={styles['links']}>
                        Schedule
                            
                            <svg
                                className='ml-2 -mr-1 w-4 h-4'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                                    clipRule='evenodd'
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </a>
        </div>
        </>
      
    );
};

export default ScheduleMeet;
