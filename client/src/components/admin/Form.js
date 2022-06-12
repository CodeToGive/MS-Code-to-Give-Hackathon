import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAdmin, createUser } from '../../redux/slices/admin';


const styles = {
    input_field:
        'rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent',
};

const Form = ({ name }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        uid: '',
        firstName: '',
        lastName: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === 'Staff') {
            console.log(formData);
            dispatch(
                createAdmin({
                    admin_username: formData.uid,
                    admin_name: `${formData.firstName} ${formData.lastName}`,
                    admin_email: formData.email,
                })
            );
        } else if (name === 'Beneficiary') {
            dispatch(
                createUser({
                    uid: formData.uid,
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                })
            );
        }
    };

    return (
        <div>
            <div className='flex flex-col max-w-md px-4 py-2 bg-white rounded-lg shadow  sm:px-6 md:px-8 lg:px-10'>
                <div className='self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl text-center'>
                    Create a New Account for {name}
                </div>
                <div className='p-2 mt-2'>
                    <form>
                        <div className='flex flex-col mb-2'>
                            <div className=' relative '>
                                <input
                                    type='text'
                                    id='create-account-pseudo'
                                    className={styles.input_field}
                                    name='uid'
                                    placeholder='UID/Username'
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='flex gap-4 mb-2'>
                            <div className=' relative '>
                                <input
                                    type='text'
                                    id='create-account-first-name'
                                    className={styles.input_field}
                                    name='firstName'
                                    placeholder='First name'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className=' relative '>
                                <input
                                    type='text'
                                    id='create-account-last-name'
                                    className={styles.input_field}
                                    name='lastName'
                                    placeholder='Last name'
                                    onChange={handleChange}
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
                                    name='email'
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='flex w-full my-4'>
                            <button
                                type='submit'
                                className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
                                onClick={handleSubmit}
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
