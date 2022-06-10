import React from 'react';

const SecondPageAID = ({ textData }) => {
    return (
        <div className='block bg-blue-200 p-6 rounded-[20px] '>
            <div className='grid lg:grid-cols-2 justify-center '>
                <>
                    {textData.map((det, idx) => (
                        <div key={idx} className='m-5'>
                            <label className='font-mono my-5'>{det}</label>
                            <br></br>
                            <div className='flex bg-blue-200 col-span-11'>
                                <input
                                    type='file'
                                    placeholder='First Name'
                                    className='w-full px-8 border-2 rounded py-2 text-gray-700 focus:outline-none focus:border-violet-500 border-blue-900'
                                />
                            </div>
                        </div>
                    ))}
                </>
            </div>
        </div>
    );
};

export default SecondPageAID;
