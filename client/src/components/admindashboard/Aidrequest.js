import React from 'react';
import Requestbutton from './Requestbutton';

const Aidrequest = () => {
    return (
        <>
            <div className='bg-red-100 text-center px-10 py-1 w-50rem h-auto block text-2xl'>
                Aid Requests
            </div>
            <div className='inline-block bg-green-100 w-50rem h-39rem py-3 overflow-y-scroll'>
                <Requestbutton text={'Finance'} />
                <Requestbutton text={'Meeting'} />
                <Requestbutton text={'Non Finance'} />
                <Requestbutton text={'Finance'} />
                <Requestbutton text={'Non Finance'} />
                <Requestbutton text={'Finance'} />
                <Requestbutton text={'Meeting'} />
                <Requestbutton text={'Meeting'} />
                <Requestbutton text={'Finance'} />
            </div>
        </>
    );
};

export default Aidrequest;
