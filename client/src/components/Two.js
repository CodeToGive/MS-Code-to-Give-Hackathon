import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Two = () => {
    return (
        <div className='block bg-blue-200 p-6 rounded-[20px] '>
            <h5 className='font-mono mb-2 text-3xl font-bold tracking-tight text-gray-900 '>
                Fill Out Your Personal Details
            </h5>
            <br></br>
            <img
                className='mx-auto h-12 w-auto'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                alt='Workflow'
            />
            <div className='grid lg:grid-cols-2 justify-center '>
                <div className='m-5'>
                    <label className='font-mono my-5'>First Name</label>
                    <br></br>
                    <div className='flex w-full flex-row grid grid-cols-12 bg-blue-600 items-center rounded mb-6 '>
                        <div className='col-span-1'>
                            <FontAwesomeIcon
                                className='m-2 text-white '
                                icon={faUser}
                            ></FontAwesomeIcon>
                        </div>
                        <div className='flex bg-blue-200 col-span-11'>
                            <input
                                type='text'
                                placeholder='First Name'
                                autoComplete='text'
                                className='w-full px-8 border rounded py-2 text-gray-700 focus:outline-none focus:border-violet-500 border-2 border-blue-900'
                            />
                        </div>
                    </div>
                </div>
                <div className='m-5'>
                    <label className='font-mono my-5'>Last Name</label>
                    <br></br>
                    <div className='flex w-full flex-row grid grid-cols-12 bg-blue-600 items-center rounded mb-6 '>
                        <div className='col-span-1'>
                            <FontAwesomeIcon
                                className='m-2 text-white '
                                icon={faUser}
                            ></FontAwesomeIcon>
                        </div>
                        <div className='flex bg-blue-200 col-span-11'>
                            <input
                                type='text'
                                placeholder='Last Name'
                                autoComplete='text'
                                className='w-full px-8 border rounded py-2 text-gray-700 focus:outline-none focus:border-violet-500 border-2 border-blue-900'
                            />
                        </div>
                    </div>
                </div>
                <div className='m-5'>
                    <label className='font-mono my-5'>Email</label>
                    <br></br>
                    <div className='flex w-full flex-row grid grid-cols-12 bg-blue-600 items-center rounded mb-6 '>
                        <div className='col-span-1'>
                            <FontAwesomeIcon
                                className='m-2 text-white '
                                icon={faUser}
                            ></FontAwesomeIcon>
                        </div>
                        <div className='flex bg-blue-200 col-span-11'>
                            <input
                                type='email'
                                placeholder='Email'
                                autoComplete='email'
                                className='w-full px-8 border rounded py-2 text-gray-700 focus:outline-none focus:border-violet-500 border-2 border-blue-900'
                            />
                        </div>
                    </div>
                </div>
                <div className='m-5'>
                    <label className='font-mono my-5'>UID</label>
                    <br></br>
                    <div className='flex w-full flex-row grid grid-cols-12 bg-blue-600 items-center rounded mb-6 '>
                        <div className='col-span-1'>
                            <FontAwesomeIcon
                                className='m-2 text-white '
                                icon={faUser}
                            ></FontAwesomeIcon>
                        </div>
                        <div className='flex bg-blue-200 col-span-11'>
                            <input
                                type='text'
                                placeholder='UID'
                                autoComplete='text'
                                className='w-full px-8 border rounded py-2 text-gray-700 focus:outline-none focus:border-violet-500 border-2 border-blue-900'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Two;
