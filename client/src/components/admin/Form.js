import React from 'react';

const styles = {
    input_field:
        'rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent',
};

const Form = ({ name }) => {
    return (
        <div>
            <div className='flex flex-col max-w-md px-4 py-2 bg-white rounded-lg shadow  sm:px-6 md:px-8 lg:px-10'>
                <div className='self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl text-center'>
                    Create a New Account for {name}
                </div>
                <div className='p-2 mt-2'>
                    <form action='#'>
                        <div className='flex flex-col mb-2'>
                            <div className=' relative '>
                                <input
                                    type='text'
                                    id='create-account-pseudo'
                                    className={styles.input_field}
                                    name='pseudo'
                                    placeholder='UID/Username'
                                />
                            </div>
                        </div>
                        <div className='flex gap-4 mb-2'>
                            <div className=' relative '>
                                <input
                                    type='text'
                                    id='create-account-first-name'
                                    className={styles.input_field}
                                    name='First name'
                                    placeholder='First name'
                                />
                            </div>
                            <div className=' relative '>
                                <input
                                    type='text'
                                    id='create-account-last-name'
                                    className={styles.input_field}
                                    name='Last name'
                                    placeholder='Last name'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <div className=' relative '>
                                <input
                                    type='text'
                                    id='create-account-email'
                                    className={styles.input_field}
                                    placeholder='Email'
                                />
                            </div>
                        </div>
                        <div className='flex w-full my-4'>
                            <button
                                type='submit'
                                className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
