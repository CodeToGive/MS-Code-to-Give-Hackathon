import React from 'react';
import CreateUser from './CreateUser';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Aidrequest from './Aidrequest';
import Statspie from './Statspie';

const Adminpanel = () => {
  return (
    <>
      <Navbar />
      <hr className='bg-blue-300 h-1'></hr>
      <div className='inline-flex'>
     <div className=''><CreateUser /></div>
      <div className='mx-5 my-5'><Aidrequest /></div>
      <div className='mx-5 my-5'><Statspie /></div>
      </div>
      <Footer />
      </>
  )
};

export default Adminpanel;
