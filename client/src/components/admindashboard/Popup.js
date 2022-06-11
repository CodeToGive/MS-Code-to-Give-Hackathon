import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Popup = ({trigger, setTrigger}) => {
  return (trigger? 
    <div className='relative w-125 h-60 mx-3 pl-3 pr-3 py-1 text-xl my-1 bg-lime-300 flex'>
      This is Popup
      <button onClick={() => setTrigger(false)}><FaTimes className='absolute top-2 right-2 bg-blue-200' style={{color: 'red'}} /></button>
    </div> : ""
  )
};

export default Popup;
