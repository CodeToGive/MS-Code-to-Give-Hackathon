import React from 'react';

const styles = {
    link: 'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ',
};

const ScheduleMeet = () => {
    return (
        <div className='container m-auto'>
            <h1 className='text-4xl font-mono'>Schedule Meet</h1>
            <a
                href='/#'
                className='flex divide-x w-full p-6 bg-pink rounded-lg border border-gray-200 shadow-md  bg-yellow-100'
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
    );
};

export default ScheduleMeet;
