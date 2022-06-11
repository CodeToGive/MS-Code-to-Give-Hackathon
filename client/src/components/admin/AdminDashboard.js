import React from 'react';
import Donation from './Donation';
import Requests from './Requests';
import ViewRegistration from './ViewRegistration';

const AdminDashboard = () => {
    return (
        <div className='m-2'>
            {/* <h1 className='text-center text-3xl'>AdminDashboard</h1> */}
            <Donation />
            <ViewRegistration />
            <Requests />
        </div>
    );
};

export default AdminDashboard;
