import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import test3 from '../../assets/images/cancerPatientImage.avif';
import test2 from '../../assets/images/Education.avif';
import test1 from '../../assets/images/groupPic.avif';

const CarouselSection = () => {
    const options = {
        autoPlay: true,
        dynamicHeight: false,
        infiniteLoop: true,
        interval: 5000,
        width: '75%',
        showThumbs: false,
    };
    const imgSrc = [test1,test2,test3]
    return (
        <div className='max-w-7xl my-1 mx-auto'>
            <Carousel className='flex justify-center' {...options}>
                {imgSrc.map((obj, idx) => {
                    return (
                        <div key={idx}>
                            <img src={obj} alt='img' />
                            {/* <p className='legend'>Legend {obj}</p> */}
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default CarouselSection;
