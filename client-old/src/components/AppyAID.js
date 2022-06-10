import React, { Component } from 'react' 
import { MultiStepForm, Step } from 'react-multi-form';
// import { useState } from 'react/cjs/react.production.min';
import { useEffect, useRef, useState } from 'react';
import { One } from './One';
import { Two } from './Two';

export const AppyAID = () => {
  const [curr,setActive] =useState(1);
  
  return (
    // <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
    <div className='p-10 grid items-center justify-center'>
    <MultiStepForm activeStep={curr}>
        <Step label="one">
        <One/>
        {/* <button type='submit' onClick={nextPage} >Next</button> */}
        </Step>
        <Step label="Two">
        <Two/>
        </Step>
        <Step label="Three">
        <p>Three</p>
        </Step>
    </MultiStepForm>
    <div className='flex items-center justify-center'>
        {(curr !== 1) ?(
            <button onClick={() => setActive(curr-1)} className="w-auto mt-6 py-2 px-10 rounded bg-blue-500 text-gray-100  focus:outline-none">Previous</button>
        ) :<div className=''></div>}
        {(curr ==2 ) ?(<div className='w-2/5'></div>) :<div className=''></div>}
        {curr !== 3 ? (
            <button onClick={() => setActive(curr+1)}  className="text-xl w-2/5 mt-6 py-2 px-12 rounded bg-blue-500 text-gray-100  focus:outline-none">Next</button>
        ):<div className=''></div>}
    </div>

    </div>
    // </div>

  );
}
