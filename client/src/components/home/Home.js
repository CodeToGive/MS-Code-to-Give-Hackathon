import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import CarouselSection from './CarouselSection';
import Footer from '../Footer';
import Adminpanel from '../admindashboard/Adminpanel';

const Home = () => {
    return (
        <>
            {/* <Adminpanel /> */}
            <Navbar />
            <CarouselSection />
            {/* <Hero /> */}
            <Footer />
        </>
    );
};

export default Home;
