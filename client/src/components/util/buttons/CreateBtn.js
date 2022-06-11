import React from 'react';
import { BsPlus } from 'react-icons/bs';

const CreateBtn = ({ name = '' }) => {
    return (
        <button className='button bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-full text-white'>
            <BsPlus className='inline mr-1 mb-0.5 scale-150' />
            Create {name}
        </button>
    );
};

export default CreateBtn;
