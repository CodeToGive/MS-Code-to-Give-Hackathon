import React from 'react';
import CarouselSection from './CarouselSection';
import Whoarewe from './Whoarewe';
import Howitworks from './Howitworks';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <CarouselSection />
            <Whoarewe />
            <Howitworks />
        </div>
    );
};

export default Home;
