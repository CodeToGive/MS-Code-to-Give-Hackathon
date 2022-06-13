import care from '../../assets/gifs/Care.png';
import LoginButton from '../util/buttons/LoginButton';

const Login = () => {
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
                    <label className='text-2xl'>Email</label>
                    <input
                        type='email'
                        className='rounded-[8px] w-3/5 '
                    ></input>
                    <label className='text-2xl'>UID</label>
                    <input type='text' className=' rounded-[8px] w-3/5'></input>
                    <label className='text-2xl'>Password</label>
                    <input
                        type='password'
                        className='rounded-[8px] w-3/5'
                    ></input>
                    <LoginButton />
                </form>
            </div>
        </div>
    );
};

export default Login;
