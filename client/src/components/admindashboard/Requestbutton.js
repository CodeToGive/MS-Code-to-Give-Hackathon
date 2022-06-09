import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import educationpic from '../../assets/images/education.jpg';
import Popup from './Popup';

const Requestbutton = ({text}) => {
    const [openpop, setOpenpop] = useState(false);

    const Click = () => {
        setOpenpop(true);

    }

    const [delrequest, setDelrequest] = useState(false);

    const deleteRequest = () => {
        setDelrequest(!delrequest);
    }

  return (
    <div>
        <div className='inline-flex mx-3 pl-3 pr-3 py-1 my-1 bg-blue-100 w-125 h-auto text-left text-xl block justify-between hover:bg-blue-300 active:border-2 active:border-green-600'>
          <button className='inline-flex w-120 h-auto text-left text-xl block my-1 hover:bg-blue-300' onClick={Click}><div className='justify-start inline-flex'> <img src={educationpic} className='h-6 w-6 mt-0.5 mr-3 rounded-lg' alt='' /> {text} </div></button>
          <div className='inline-flex h-auto text-left text-xl block my-1 justify-between'><button onClick={deleteRequest}><FaTimes className='' style={{color: 'red'}} /></button></div>
          </div>
          <Popup trigger={openpop} setTrigger={setOpenpop} />
    </div>
  )
};

export default Requestbutton;
