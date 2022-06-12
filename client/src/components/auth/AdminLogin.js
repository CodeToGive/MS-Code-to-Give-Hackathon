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
                    <div>
                        <label className='text-2xl'>Username</label>
                        <input
                            type='text'
                            name='username'
                            className='rounded-[8px] w-3/5 '
                            onChange={updateFormData}
                        ></input>
                    </div>
                    <div>
                        <label className='text-2xl'>Password</label>
                        <input
                            type='password'
                            name='password'
                            className='rounded-[8px] w-3/5'
                            onChange={updateFormData}
                        ></input>
                    </div>
                    <button
                        className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
                        type='submit'
                        onClick={submitForm}
                    >
                        Button
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
