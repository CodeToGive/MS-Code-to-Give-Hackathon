import React from 'react';

import Navbar from '../Navbar';
import Hero from './Hero';
import Footer from '../Footer';
import { Login } from '../Login';
import { UserProfile } from './UserProfile';
import { ProfilePage } from '../ProfilePageFinancial';

const Home = () => {
    return (
        <>
            <Navbar />
            <br />
            <UserProfile/>
            {/* <ProfilePage/> */}
            <br></br>
            <Footer />
        </>
    );
};

export default Home;
