import React from 'react';
import CreateUser from './CreateUser';
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';
import Aidrequest from './Aidrequest';
import Statspie from './Statspie';

const Adminpanel = () => {
  return (
    <>
      <Header />
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
