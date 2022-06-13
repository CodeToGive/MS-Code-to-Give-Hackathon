import React from 'react'
import { useTranslation,Trans } from 'react-i18next';

export const DetailsOfHowItWorks = () => {
  
    const { t, i18n } = useTranslation();
  return (
    <div className='p-5'>
        <div className='font-serif bg-gray-200 rounded-[20px] p-6'>
        <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('We provide the applicants with various beneficiaries to apply for. There are two sections one for Financial AID and the other for Non-Financial AID. These beneficiaries help out the applicants by assisting them in their fields of interest. We help students achieve their goals, which require some funding which cant be afforded by some of the families.') }
        </div>
        <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('The financial barriers should never hamper the growth of the child so we help them in enriching their interests by providing them with the required support. The funds are provided when we approve all the submitted documents.')} 
        </div>
        <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('The two types of AID are further divided into various categories. Financial AID comprises of donations for Education, Health , Livelihood and Life Skills. However, the Non-Financial AID consists of  Counselling, availing Jobs and helping with funds for start-ups.')}

        </div>
    </div>
    </div>
    
  )
}
