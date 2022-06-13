import React from 'react';
import test from '../../assets/images/test.jpg';
import whatweareright from '../../assets/images/whatweareright.jpg';

const Whoarewe = () => {
    return (
        <div className='md:inline-flex max-w-fit m-2 p-2'>
            <div className='inine-flex items-start ml-7 mx-5 mt-10 border-box'>
                <div className='max-w-3xl mr-5'>
                    <div className='text-4xl text-orange-500 font-extrabold ml-4'>
                        Who We Are
                    </div>
                    <p className='text-justify text-2xl text-gray-600 border-orange-400 border-2 px-4 py-3 rounded-2xl hover:text-black'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Molestiae sed unde corporis ullam cumque nisi
                        voluptas possimus est? Similique sit, debitis molestias
                        consequatur ab unde voluptate error modi sint
                        distinctio? Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Molestiae sed unde corporis ullam
                        cumque nisi voluptas possimus est? Similique sit,
                        debitis molestias consequatur ab unde voluptate error
                        modi sint distinctio? Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Molestiae sed unde
                        corporis ullam cumque nisi voluptas possimus est?
                        Similique sit, debitis molestias consequatur ab unde
                        voluptate error modi sint distinctio? Lorem ipsum dolor
                        sit, amet consectetur adipisicing elit. Molestiae sed
                        unde corporis ullam cumque nisi voluptas possimus est?
                        Similique sit, debitis molestias consequatur ab unde
                        voluptate error modi sint distinctio?
                        <div className='my-4'>
                            <a
                                className='button bg-orange-500 text-white text-lg hover:bg-orange-600 rounded-md px-4 py-2 my-4 mx-auto'
                                href='/about'
                            >
                                Know More
                            </a>
                        </div>
                    </p>
                </div>
            </div>
            <div className='max-w-md md:max-w-xl px-4 pt-14 mt-11'>
                <img src={whatweareright} alt='img' />
            </div>
        </div>
    );
};

export default Whoarewe;
