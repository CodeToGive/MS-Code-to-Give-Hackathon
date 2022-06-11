import React, { useState } from 'react'
import Createuserpopup from './Createuserpopup';

const CreateUser = () => {

  const [adduser,setAdduser] = useState(false);
  const [addadmin,setAddadmin] = useState(false);
  const [updateuser,setUpdateuser] = useState(false);
  const [updateadmin,setUpdateadmin] = useState(false);
  const [viewuser,setViewuser] = useState(false);
  const [donationbutton,setDonationbutton] = useState(false);
  const [sendaid,setSendaid] = useState(false);
  const [schedulemeet,setSchedulemeet] = useState(false);

  return (
    <div className=''>
      <div className=''>
      <button className='w-52 h-20 text-2xl rounded-lg transition duration-500 transform px-6 py-2 m-5 block
               bg-teal-400 hover:bg-indigo-400
               border-4 border-red-500 hover:border-yellow-500
               hover:text-white
               hover:opacity-50
               hover:shadow-md
               hover:scale-110'
               onClick={() => setAdduser(true)}>
        Add User
      </button>
      <div className='absolute'><Createuserpopup trigger1={adduser} setTrigger1={setAdduser} /></div>
      </div> 
      <div>
      <button className='w-52 h-20 text-2xl rounded-lg transition duration-500 transform px-6 py-2 m-5 block
               bg-teal-400 hover:bg-indigo-400
               border-4 border-red-500 hover:border-yellow-500
               hover:text-white
               hover:opacity-50
               hover:shadow-md
               hover:scale-110 '
               onClick={() => setAddadmin(true)}>
      Add Admin
    </button>
    <div className='absolute'><Createuserpopup trigger2={addadmin} setTrigger2={setAddadmin} /></div>
      </div>
      <div>
    <button className='w-52 h-20 text-2xl rounded-lg transition duration-500 transform px-6 py-2 m-5 block
               bg-teal-400 hover:bg-indigo-400
               border-4 border-red-500 hover:border-yellow-500
               hover:text-white
               hover:opacity-50
               hover:shadow-md
               hover:scale-110 '
               onClick={() => setUpdateadmin(true)}>
      Edit Personal Info
    </button>
    <div className='absolute'><Createuserpopup trigger3={updateadmin} setTrigger3={setUpdateadmin} /></div>
    </div>
    <div>
    <button className='w-52 h-20 text-2xl rounded-lg transition duration-500 transform px-6 py-2 m-5 block
               bg-teal-400 hover:bg-indigo-400
               border-4 border-red-500 hover:border-yellow-500
               hover:text-white
               hover:opacity-50
               hover:shadow-md
               hover:scale-110 '
               onClick={() => setUpdateuser(true)}>
      Edit User Info
    </button>
    <div className='absolute'><Createuserpopup trigger4={updateuser} setTrigger4={setUpdateuser} /></div>
    </div>
    <div>
    <button className='w-52 h-20 text-2xl rounded-lg transition duration-500 transform px-6 py-2 m-5 block
               bg-teal-400 hover:bg-indigo-400
               border-4 border-red-500 hover:border-yellow-500
               hover:text-white
               hover:opacity-50
               hover:shadow-md
               hover:scale-110'
               onClick={() => setViewuser(true)}>
      View User Info
    </button>
    <div className='absolute'><Createuserpopup trigger5={viewuser} setTrigger5={setViewuser} /></div>
    </div>
    <div>
    <button className='w-52 h-20 text-2xl rounded-lg transition duration-500 transform px-6 py-2 m-5 block
               bg-teal-400 hover:bg-indigo-400
               border-4 border-red-500 hover:border-yellow-500
               hover:text-white
               hover:opacity-50
               hover:shadow-md
               hover:scale-110 '
               onClick={() => setDonationbutton(true)}>
      Donations
    </button>
    <div className='absolute'><Createuserpopup trigger6={donationbutton} setTrigger6={setDonationbutton} /></div>
    </div>
    <div>
    <button className='w-52 h-20 text-2xl rounded-lg transition duration-500 transform px-6 py-2 m-5 block
               bg-teal-400 hover:bg-indigo-400
               border-4 border-red-500 hover:border-yellow-500
               hover:text-white
               hover:opacity-50
               hover:shadow-md
               hover:scale-110 '
               onClick={() => setSendaid(true)}>
      Send Aid
    </button>
    <div className='absolute'><Createuserpopup trigger7={sendaid} setTrigger7={setSendaid} /></div>
    </div>
    <div>
    <button className='w-52 h-20 text-2xl rounded-lg transition duration-500 transform px-6 py-2 m-5 block
               bg-teal-400 hover:bg-indigo-400
               border-4 border-red-500 hover:border-yellow-500
               hover:text-white
               hover:opacity-50
               hover:shadow-md
               hover:scale-110 '
               onClick={() => setSchedulemeet(true)}>
      Schedule Meet
    </button>
    <div className='absolute'><Createuserpopup trigger8={schedulemeet} setTrigger8={setSchedulemeet} /></div>
    </div>
    </div>
  )};

export default CreateUser;