import React from 'react';
import { MultiStepForm, Step } from 'react-multi-form';
import { useState } from 'react';
import One from '../One';
import Two from '../Two';

const AppyAID = () => {
    const [curr, setActive] = useState(1);

    return (
        <div className='p-10 grid items-center justify-center'>
            <MultiStepForm activeStep={curr}>
                <Step label='one'>
                    <One />
                </Step>
                <Step label='Two'>
                    <Two />
                </Step>
                <Step label='Three'>
                    <p>Three</p>
                </Step>
            </MultiStepForm>
            <div className='flex items-center justify-center'>
                {curr !== 1 ? (
                    <button
                        onClick={() => setActive(curr - 1)}
                        className='w-auto mt-6 py-2 px-10 rounded bg-blue-500 text-gray-100  focus:outline-none'
                    >
                        Previous
                    </button>
                ) : (
                    <div className=''></div>
                )}
                {curr === 2 ? (
                    <div className='w-2/5'></div>
                ) : (
                    <div className=''></div>
                )}
                {curr !== 3 ? (
                    <button
                        onClick={() => setActive(curr + 1)}
                        className='text-xl w-2/5 mt-6 py-2 px-12 rounded bg-blue-500 text-gray-100  focus:outline-none'
                    >
                        Next
                    </button>
                ) : (
                    <div className=''></div>
                )}
            </div>
        </div>
    );
};

export default AppyAID;
