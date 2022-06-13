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
                    <div className='m-2'>
                        <label className='text-xl m-3'>Email&nbsp;&nbsp;</label>
                        <input
                            type='email'
                            className='rounded-[20px] w-3/5 p-1 m-2'
                        ></input>
                    </div>
                    <div className='m-2'>
                        <label className='text-xl m-3'>UID&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input
                            type='text'
                            className='rounded-[20px] w-3/5 p-1 m-2'
                        ></input>
                    </div>
                    <div className='m-2'>
                        <label className='text-xl m-3'>Password</label>
                        <input
                            type='password'
                            className='rounded-[20px] w-3/5 p-1 m-2'
                        ></input>
                    </div>
                    <LoginButton />
                </form>
            </div>
        </div>
    );
};

export default Login;
