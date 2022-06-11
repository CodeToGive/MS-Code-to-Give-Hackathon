import React from 'react';
import test from '../../assets/images/test.jpg';
import whatweareright from '../../assets/images/whatweareright.jpg';

const Whoarewe = () => {
  return (
    <div className='md:inline-flex max-w-fit'>
      <div className='inine-flex items-start ml-7 mx-5 mt-10 border-box'>
      <div className='max-w-3xl mr-5'><div className='text-4xl text-orange-500 font-extrabold ml-4'>Who We Are</div>
      <p className='text-justify text-2xl text-gray-600 border-orange-400 border-2 px-4 py-3 rounded-2xl hover:text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sed unde corporis ullam cumque nisi voluptas possimus est? Similique sit, debitis molestias consequatur ab unde voluptate error modi sint distinctio?    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sed unde corporis ullam cumque nisi voluptas possimus est? Similique sit, debitis molestias consequatur ab unde voluptate error modi sint distinctio?    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sed unde corporis ullam cumque nisi voluptas possimus est? Similique sit, debitis molestias consequatur ab unde voluptate error modi sint distinctio? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sed unde corporis ullam cumque nisi voluptas possimus est? Similique sit, debitis molestias consequatur ab unde voluptate error modi sint distinctio?<a href='' className='text-2xl text-orange-400 underline decoration-orange-400 hover:text-orange-600 hover:decoration-orange-600 mx-5'>Know More</a></p></div>
    </div>
      <div className='max-w-md md:max-w-xl px-4 pt-14 mt-11'><img src={whatweareright} alt='img' /></div>
    </div>
  )
};

export default Whoarewe;
