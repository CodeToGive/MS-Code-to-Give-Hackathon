import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Createuserpopup = ({
    trigger1,
    setTrigger1,
    trigger2,
    setTrigger2,
    trigger3,
    setTrigger3,
    trigger4,
    setTrigger4,
    trigger5,
    setTrigger5,
    trigger6,
    setTrigger6,
    trigger7,
    setTrigger7,
    trigger8,
    setTrigger8,
}) => {
    if (trigger1) {
        return (
            <div className='relative w-125 h-60 mx-3 pl-3 pr-3 py-1 text-xl my-1 bg-lime-300 flex'>
                This is Popup
                <button onClick={() => setTrigger1(false)}>
                    <FaTimes
                        className='absolute top-2 right-2 bg-blue-200'
                        style={{ color: 'red' }}
                    />
                </button>
            </div>
        );
    } else if (trigger2) {
        return (
            <div className='relative w-125 h-60 mx-3 pl-3 pr-3 py-1 text-xl my-1 bg-lime-300 flex'>
                This is Popup
                <button onClick={() => setTrigger2(false)}>
                    <FaTimes
                        className='absolute top-2 right-2 bg-blue-200'
                        style={{ color: 'red' }}
                    />
                </button>
            </div>
        );
    } else if (trigger3) {
        return (
            <div className='relative w-125 h-60 mx-3 pl-3 pr-3 py-1 text-xl my-1 bg-lime-300 flex'>
                This is Popup
                <button onClick={() => setTrigger3(false)}>
                    <FaTimes
                        className='absolute top-2 right-2 bg-blue-200'
                        style={{ color: 'red' }}
                    />
                </button>
            </div>
        );
    } else if (trigger4) {
        return (
            <div className='relative w-125 h-60 mx-3 pl-3 pr-3 py-1 text-xl my-1 bg-lime-300 flex'>
                This is Popup
                <button onClick={() => setTrigger4(false)}>
                    <FaTimes
                        className='absolute top-2 right-2 bg-blue-200'
                        style={{ color: 'red' }}
                    />
                </button>
            </div>
        );
    } else if (trigger5) {
        return (
            <div className='relative w-125 h-60 mx-3 pl-3 pr-3 py-1 text-xl my-1 bg-lime-300 flex'>
                This is Popup
                <button onClick={() => setTrigger5(false)}>
                    <FaTimes
                        className='absolute top-2 right-2 bg-blue-200'
                        style={{ color: 'red' }}
                    />
                </button>
            </div>
        );
    } else if (trigger6) {
        return (
            <div className='relative w-125 h-60 mx-3 pl-3 pr-3 py-1 text-xl my-1 bg-lime-300 flex'>
                This is Popup
                <button onClick={() => setTrigger6(false)}>
                    <FaTimes
                        className='absolute top-2 right-2 bg-blue-200'
                        style={{ color: 'red' }}
                    />
                </button>
            </div>
        );
    } else if (trigger7) {
        return (
            <div className='relative w-125 h-60 mx-3 pl-3 pr-3 py-1 text-xl my-1 bg-lime-300 flex'>
                This is Popup
                <button onClick={() => setTrigger7(false)}>
                    <FaTimes
                        className='absolute top-2 right-2 bg-blue-200'
                        style={{ color: 'red' }}
                    />
                </button>
            </div>
        );
    } else if (trigger8) {
        return (
            <div className='relative w-125 h-60 mx-3 pl-3 pr-3 py-1 text-xl my-1 bg-lime-300 flex'>
                This is Popup
                <button onClick={() => setTrigger8(false)}>
                    <FaTimes
                        className='absolute top-2 right-2 bg-blue-200'
                        style={{ color: 'red' }}
                    />
                </button>
            </div>
        );
    } else {
        return '';
    }
};

export default Createuserpopup;
