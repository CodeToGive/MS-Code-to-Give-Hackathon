import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faMailForward, faUser, faVoicemail } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/fontawesome-svg-core'



export const FirstPageAID = ({textData}) => {
  return (
    <div className='block bg-blue-200 p-6 rounded-[20px] '>
    <div className='grid lg:grid-cols-2 justify-center '>
    <>
    {
      textData.map((det,index) => (
        <>

        <div class="m-5"> 
            <label className='font-mono my-5'>{det}</label> 
            <br></br>
            <div className='flex bg-blue-200 col-span-11'><input type='text' placeholder="First Name" autoComplete='text'
             class="w-full px-8 border rounded py-2 text-gray-700 focus:outline-none focus:border-violet-500 border-2 border-blue-900" /></div></div> </>

      ))
    }
    </>
    
      </div>
      </div>
  )
}
