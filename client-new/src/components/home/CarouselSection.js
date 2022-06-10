import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import test from '../../assets/images/test.jpg';

const CarouselSection = () => {
    const options = {
        autoPlay: true,
        dynamicHeight: false,
        infiniteLoop: true,
        interval: 5000,
        width: '75%',
        showThumbs: false,
    };
    return (
        // <div className='container my-2 mx-auto'>
        <div className='max-w-7xl my-1 mx-auto'>
            <Carousel className='flex justify-center' {...options}>
                {[1, 2, 3].map((obj, idx) => {
                    return (
                        <div key={idx} >
                            <img src={test} alt='img' />
                            <p className='legend'>Legend {obj}</p>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default CarouselSection;
