import React, { useState } from 'react';
import '../../../node_modules/awesome-react-steps/lib/css/arrows.css';
import { Arrows } from 'awesome-react-steps';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Howitworks = () => {
    const {t} = useTranslation();
    const data = [
        'FILL IN YOUR DETAILS',
        'MAKE AN AID REQUEST',
        'UPLOAD THE REQUIRED DOCUMENTS',
        'WAIT FOR AID ACCEPT/REJECT',
        'GET AID',
    ];
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveStep((activeStep + 1) % data.length);
        }, 5000);
        return () => clearInterval(intervalId); //This is important
    }, [activeStep, data.length]);

    return (
        <div className=' m-2 p-2'>
            <div className='inline-flex items-start ml-7 mx-5 mt-10 md:flex-wrap'>
                <div className='max-w-8xl mr-5'>
                    <div className='text-4xl text-orange-500 font-extrabold '>
                        {t('How It Works')}
                    </div>
                </div>
            </div>
            <div className='mx-4 my-2 p-4'>
                <Arrows
                    model={{
                        steps: data.map((el) => {
                            return {
                                label: t(el),
                            };
                        }),
                        current: activeStep,
                    }}
                />
                <div className='flex flex-wrap justify-center'>
                    <a
                        className='button bg-orange-500 text-white text-lg hover:bg-orange-600 rounded-md px-4 py-2 my-4 mx-auto'
                        href='/how-it-works'
                    >
                        {t('Know More')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Howitworks;
