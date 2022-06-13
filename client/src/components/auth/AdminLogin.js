import { useState } from 'react';
import { useDispatch } from 'react-redux';
import care from '../../assets/gifs/Care.png';
import { login } from '../../redux/slices/adminAuth';

const AdminLogin = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const updateFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(
            login({
                username: formData.username,
                password: formData.password,
            })
        );
    };

    return (
        <div className='relative w-4/5 m-auto h-full lg:flex lg:flex-row grid place-items-center border rounded-[20px]'>
            <img
                src={care}
                alt='Care'
                className='img rounded-[20px]'
                width='50%'
            />
            <div className='bg-gray-300 w-full grid place-items-center p-10 lg:rounded-[20px] sm:rounded-b-[20px]'>
                <form className='font-mono space-y-2 w-full m-10'>
                    <div className='m-2'>
                        <label className='text-xl m-3'>Username</label>
                        <input
                            type='text'
                            name='username'
                            className='rounded-[20px] w-3/5 p-1 m-2'
                            onChange={updateFormData}
                        ></input>
                    </div>
                    <div className='m-2'>
                        <label className='text-xl m-3'>Password</label>
                        <input
                            type='password'
                            name='password'
                            className='rounded-[20px] w-3/5 p-1 m-2'
                            onChange={updateFormData}
                        ></input>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button
                            className='m-5 bg-white hover:bg-custom-primary text-custom-primary-dark font-semibold hover:text-white py-2 px-4 border border-custom-primary-dark hover:border-transparent rounded'                            type='submit'
                            onClick={submitForm}
                        >
                            Login
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
