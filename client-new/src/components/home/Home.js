import React from 'react';

import Header from '../navigation/Header';
import Hero from './Hero';
import Footer from '../navigation/Footer';
import { Login } from '../Login';
import { UserProfile } from './UserProfile';
import { ProfilePage } from '../ProfilePageFinancial';

const Home = () => {
    return (
        <>
            <Header />
            <UserProfile/>
            <Footer />
        </>
    );
};

export default Home;
