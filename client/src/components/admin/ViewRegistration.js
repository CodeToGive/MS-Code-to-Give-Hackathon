import React from 'react';
import HorizaontalTabs from './HorizaontalTabs';

const View_Registration = () => {
    const navtabs = [
        {
            no: 0,
            name: 'Staff',
            id: 'staff',
        },
        {
            no: 1,
            name: 'Beneficiary',
            id: 'beneficiary',
        },
    ];
    return (
        <div className='border-2 rounded-lg my-4 p-2'>
            <h1 className=''>View & Registration</h1>
            <HorizaontalTabs navtabs={navtabs} />
        </div>
    );
};

export default View_Registration;
