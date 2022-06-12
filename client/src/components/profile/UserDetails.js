import React from 'react'
import avatar from '../../assets/images/avatar2.png';

export const UserDetails = () => {
  return (
    <div className='p-8 lg:flex md:grid md:grid-cols-2 lg:grid-cols-3 divide-x block w-screen p-6 bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700 bg-orange-100 justify-center'>
        <div className='m-auto'><img src={avatar} className="rounded-full "></img>
        </div>

        <div className='block ml-6 mr-6 bg-orange-300 p-4 rounded-[10px]'>
            <div className='font-mono'>Name: Ananya Bangera</div> 
            <div className='font-mono'>Date of Birth: 03/03/2002</div> 
            <div className='font-mono'>Bio: Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</div> 
        </div>
        <div className='block p-6  w-full bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700 bg-orange-300 rounded-[20px] grid grid-cols-2'>
            <div className=' m-6 bg-white p-4 rounded-[10px]'>
                <div className='font-mono p-1'>Scheme Name: Education</div> 
                <div className='font-mono p-1'>Application Date: 02/06/2022</div> 
                <div className='font-mono p-1'>Application Status: Approved</div> 
                <button className='p-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>View Application</button>  
            </div>      
            <div className='m-6 bg-white p-4 rounded-[10px]'>
            <div className='font-mono p-1'>Scheme Name: Education</div> 
            <div className='font-mono p-1'>Application Date: 11/05/2022</div> 
            <div className='font-mono p-1'>Application Status: Approved</div> 
            <button className='p-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>View Application</button>  
            </div>      
        </div>      
            

    </div>
  )
}
