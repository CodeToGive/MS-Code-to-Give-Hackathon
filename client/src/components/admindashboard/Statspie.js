import React from 'react';

const Statspie = () => {
    return (
        <>
            <div className='bg-pink-300 w-96 h-41rem'>
                <div className='bg-pink-700 w-96 h-27rem'></div>
                <div className='inline-flex'>
                    <div className='text-center m-1 mt-2 w-60 box-border rounded-lg border-2 border-green-600 bg-gray-200 font-bold text-2xl'>
                        TOTAL DONATIONS RECEIVED:
                    </div>
                    <div className='w-32 box-border rounded-lg border-2 text-center m-1 mt-2 py-3 border-green-600 bg-gray-200 border font-bold text-2xl'>
                        70000
                    </div>
                </div>
                <div className='inline-flex'>
                    <div className='text-center m-1 py-3 w-60 box-border rounded-lg border-2 border-green-600 bg-gray-200 font-bold text-2xl'>
                        TOTAL AID GIVEN:
                    </div>
                    <div className='w-32 box-border rounded-lg border-2 text-center m-1 py-3 border-green-600 bg-gray-200 font-bold text-2xl'>
                        40000
                    </div>
                </div>
                <div className='inline-flex'>
                    <div className='text-center m-1 w-60 box-border rounded-lg border-2 border-green-600 bg-gray-200 font-bold text-2xl'>
                        TOTAL DONATIONS REMAINING:
                    </div>
                    <div className='w-32 box-border rounded-lg border-2 text-center m-1 py-3 border-green-600 bg-gray-200 border font-bold text-2xl'>
                        30000
                    </div>
                </div>
            </div>
        </>
    );
};

export default Statspie;
