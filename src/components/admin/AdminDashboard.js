import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Donation from './Donation';
import Requests from './Requests';
import ViewRegistration from './ViewRegistration';
import { getAdmins, getUsers } from '../../redux/slices/admin';

const AdminDashboard = () => {
    const {
        admin: { admins, users },
        adminAuth: { admin },
    } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdmins());
        dispatch(getUsers());
    }, [admin, dispatch]);

    return (
        <div className='m-2'>
            <Donation />
            <ViewRegistration admins={admins} users={users} />
            <Requests />
        </div>
    );
};

export default AdminDashboard;
