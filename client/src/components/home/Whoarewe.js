import { t } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import test from '../../assets/images/test.jpg';
import whatweareright from '../../assets/images/Art.avif';

const Whoarewe = () => {
    const {t} = useTranslation();
    return (
        <div className='md:inline-flex max-w-fit m-2 p-2'>
            <div className='inine-flex items-start ml-7 mx-5 mt-10 border-box'>
                <div className='max-w-3xl mr-5'>
                    <div className='text-3xl text-orange-500 font-extrabold ml-4 mb-2'>
                        {t('Who We Are')}
                    </div>
                    <p className='bg-gray-200 text-justify text-xl text-gray-600 border-orange-400 border-2 px-4 py-3 rounded-2xl hover:text-black'>
                       <div>
                        <div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('St. Jude creates a community for our families, who come from all over India, speak different languages and represent all communities, but share the common goal of getting their child treated for cancer.Childhood cancers have a high rate of cure but medical treatment needs to be supported by an infection free, cheerful environment and proper nourishment.')}</div>
                        {/* <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('Underprivileged parents from rural India bring their children diagnosed with cancer to large cities where high quality treatment is available. While treatment may last as long as two years, the child may be an outpatient all through this long stretch, or may have brief periods where hospitalization is required.')}
                        </div> */}
                        <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(' St. Judes is bridging this gap with its innovative model of holistic care. Our “home away from home” is a hygienic, protective, nurturing environment which gives the children the best chance of beating cancer. Clean and safe accommodation is unaffordable for these families and often they end up living on the footpath next to the hospital where the child is being treated. The filth and squalor leaves the child vulnerable to secondary infections, the parents don’t have a place to prepare meals, and there are no toilet and bathing facilities they can use. ')}
                        </div>
                       </div>
                        <div className='my-4'>
                            <a
                                className='button bg-orange-500 text-white text-lg hover:bg-orange-600 rounded-md px-4 py-2 my-4 mx-auto'
                                href='/about'
                            >
                                {t('Know More')}
                            </a>
                        </div>
                    </p>
                </div>
            </div>
            <div className='max-w-md md:max-w-xl px-4 pt-14 mt-11'>
                <img src={whatweareright} alt='img' />
            </div>
        </div>
    );
};

export default Whoarewe;
