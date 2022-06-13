import React from 'react';
import { MultiStepForm, Step } from 'react-multi-form';
import { useState } from 'react';
import FirstPageAID from './aid/FirstPageAID';
import { useLocation } from 'react-router-dom';
import SecondPageAID from './aid/SecondPageAid';
import ThirdPageAID from './aid/ThirdPageAid';

const ProfilePageFinancial = () => {
    const location = useLocation();
    const [curr, setActive] = useState(1);
    const [docs, setDocs] = useState({
        Education: [
            [
                'Enter Your Level of Education:(10th/12th/Graduate)',
                'Enter Your Institute Name:',
                'Enter the amount requested',
            ],
            [
                'Upload your SSC Marksheet',
                'Upload your HSC Marksheet',
                'Upload your Aadhar Card',
                'Proof of Residence',
            ],
            [],
        ],
        Health: [
            [
                'Enter Your Level of Education:(10th/12th/Graduate)',
                'Enter Your Institute Name:',
                'Enter the amount requested',
            ],
            [
                'Upload your SSC Marksheet',
                'Upload your HSC Marksheet',
                'Upload your Aadhar Card',
                'Proof of Residence',
            ],
            [],
        ],
        Livelihood: [
            [
                'Enter Your Level of Education:(10th/12th/Graduate)',
                'Enter Your Institute Name:',
                'Enter the amount requested',
            ],
            [
                'Upload your SSC Marksheet',
                'Upload your HSC Marksheet',
                'Upload your Aadhar Card',
                'Proof of Residence',
            ],
            [],
        ],
        Life_Skills: [
            [
                'Enter Your Level of Education:(10th/12th/Graduate)',
                'Enter Your Institute Name:',
                'Enter the amount requested',
            ],
            [
                'Upload your SSC Marksheet',
                'Upload your HSC Marksheet',
                'Upload your Aadhar Card',
                'Proof of Residence',
            ],
            [],
        ],
        Job: [
            [
                'Enter Your Level of Education:(10th/12th/Graduate)',
                'Enter Your Institute Name:',
                'Enter the amount requested',
            ],
            [
                'Upload your SSC Marksheet',
                'Upload your HSC Marksheet',
                'Upload your Aadhar Card',
                'Proof of Residence',
            ],
            [],
        ],
        Counselling: [
            [
                'Enter Your Level of Education:(10th/12th/Graduate)',
                'Enter Your Institute Name:',
                'Enter the amount requested',
            ],
            [
                'Upload your SSC Marksheet',
                'Upload your HSC Marksheet',
                'Upload your Aadhar Card',
                'Proof of Residence',
            ],
            [],
        ],
        Business: [
            [
                'Enter Your Level of Education:(10th/12th/Graduate)',
                'Enter Your Institute Name:',
                'Enter the amount requested',
            ],
            [
                'Upload your SSC Marksheet',
                'Upload your HSC Marksheet',
                'Upload your Aadhar Card',
                'Proof of Residence',
            ],
            [],
        ],
    });
    return (
        <div className='p-10 grid items-center justify-center'>
            <MultiStepForm activeStep={curr}>
                <Step label='one'>
                    <FirstPageAID textData={docs[location.state.name][0]} />
                </Step>
                <Step label='Two'>
                    {/* <Two/> */}
                    <SecondPageAID textData={docs[location.state.name][1]} />
                </Step>
                <Step label='Three'>
                    <ThirdPageAID textData={docs[location.state.name][1]} />
                </Step>
            </MultiStepForm>
            <div className='flex items-center justify-center'>
                {curr !== 1 ? (
                    <button
                        onClick={() => setActive(curr - 1)}
                        className='text-xl w-2/5 mt-6 py-2 px-12 rounded bg-blue-500 text-gray-100  focus:outline-none'
                    >
                        Previous
                    </button>
                ) : (
                    <div className=''></div>
                )}
                {curr !== 1 ? (
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
                {curr === 3 ? (
                    <button
                        onClick={() => setActive(curr + 1)}
                        className='text-xl w-2/5 mt-6 py-2 px-12 rounded bg-blue-500 text-gray-100  focus:outline-none'
                    >
                        Submit
                    </button>
                ) : (
                    <div className=''></div>
                )}
            </div>
        </div>
    );
};

export default ProfilePageFinancial;
