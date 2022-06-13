import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Donation from './Donation';
import Requests from './Requests';
import ViewRegistration from './ViewRegistration';
import { getAdmins, getUsers, getAllAid } from '../../redux/slices/admin';
import { loadAdmin } from '../../redux/slices/adminAuth';

const AdminDashboard = () => {
    const {
        admin: { admins, users, aids },
        adminAuth: { admin },
    } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAdmin());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAdmins());
        dispatch(getUsers());
        dispatch(getAllAid());
    }, [admin, dispatch]);

    return (
        <div className='m-2'>
            <Donation />
            <Requests aids={aids} />
            <ViewRegistration admins={admins} users={users} />
        </div>
    );
};

export default AdminDashboard;
