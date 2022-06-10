import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faMailForward, faUser, faVoicemail } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/fontawesome-svg-core'

export const One = () => {
  return (
      <div className='block bg-blue-200 p-6 rounded-[20px] '>
        <h5 class="font-mono mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Fill Out Your Personal Details</h5>
        <br></br>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        <div className='grid lg:grid-cols-2 justify-center '>
        
        <div class="m-5"> 
            <label className='font-mono my-5'>First Name</label> 
            <br></br>
            <div class="flex w-full flex-row grid grid-cols-12 bg-blue-600 items-center rounded mb-6 ">
            <div className='col-span-1'><FontAwesomeIcon className='m-2 text-white ' icon={faUser}></FontAwesomeIcon></div>    
            <div className='flex bg-blue-200 col-span-11'><input type='text' placeholder="First Name" autoComplete='text'
             class="w-full px-8 border rounded py-2 text-gray-700 focus:outline-none focus:border-violet-500 border-2 border-blue-900" /></div></div>
        </div>
        <div class="m-5"> 
            <label className='font-mono my-5'>Last Name</label> 
            <br></br>
            <div class="flex w-full flex-row grid grid-cols-12 bg-blue-600 items-center rounded mb-6 ">
            <div className='col-span-1'><FontAwesomeIcon className='m-2 text-white ' icon={faUser}></FontAwesomeIcon></div>    
            <div className='flex bg-blue-200 col-span-11'><input type='text' placeholder="Last Name" autoComplete='text'
             class="w-full px-8 border rounded py-2 text-gray-700 focus:outline-none focus:border-violet-500 border-2 border-blue-900" /></div></div>
        </div>
        <div class="m-5"> 
            <label className='font-mono my-5'>Email</label> 
            <br></br>
            <div class="flex w-full flex-row grid grid-cols-12 bg-blue-600 items-center rounded mb-6 ">
            <div className='col-span-1'><FontAwesomeIcon className='m-2 text-white ' icon={faUser}></FontAwesomeIcon></div>    
            <div className='flex bg-blue-200 col-span-11'><input type='email' placeholder="Email" autoComplete='email'
             class="w-full px-8 border rounded py-2 text-gray-700 focus:outline-none focus:border-violet-500 border-2 border-blue-900" /></div></div>
        </div>
        <div class="m-5"> 
            <label className='font-mono my-5'>UID</label> 
            <br></br>
            <div class="flex w-full flex-row grid grid-cols-12 bg-blue-600 items-center rounded mb-6 ">
            <div className='col-span-1'><FontAwesomeIcon className='m-2 text-white ' icon={faUser}></FontAwesomeIcon></div>    
            <div className='flex bg-blue-200 col-span-11'><input type='text' placeholder="UID" autoComplete='text'
             class="w-full px-8 border rounded py-2 text-gray-700 focus:outline-none focus:border-violet-500 border-2 border-blue-900" /></div></div>
        </div>
    </div>
      </div>
    
  )
}
