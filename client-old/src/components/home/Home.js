import React from 'react';
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';
import Hero from './Hero';
import { Login } from '../Login';
import { UserProfile } from './UserProfile';

const Home = () => {
    return (
        <>
            <Header />
            <UserProfile />
            <Footer />
        </>
    );
};

export default Home;
