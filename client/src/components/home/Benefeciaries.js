import React from 'react';
import { useTranslation } from 'react-i18next';
import whatweareright from '../../assets/images/school.avif';
import { DesignBox } from '../navigation/DesignBox';

const Benefeciaries = () => {
  const {t}=useTranslation()
  return (
    <div className='md:inline-flex max-w-fit'>
      <div className='max-w-xl px-4 pt-14 mt-11 ml-7 mr-7'><img src={whatweareright} alt='img' /></div>
      <div className='inine-flex items-start ml-7 mx-5 mt-10 border-box'>
      <div className='max-w-3xl mr-5 ml-5'><div className='text-3xl text-orange-500 font-extrabold ml-4 mb-2'>{t('Our Benefeciaries')}</div>
      <p className='bg-gray-200 text-justify text-xl text-gray-600 border-orange-400 border-2 px-4 py-3 rounded-2xl hover:text-black hover:shadow-xl'>
      <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<DesignBox text={t('St. Judes')}/>} {t(' who have completed five years from the date of diagnosis and have recovered after treatment, are eligible to be enrolled in St. Judes for Life. Their ages range from six years to the mid-20s. The children who stayed during the early years of our centres are now teenagers and young adults on the threshold of higher education and careers. SJFL will provide customised support to the survivors from the age of six as required.')}
      </div>
      <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('Each year we will enroll more children into the programme as they cross the five-year mark since diagnosis - and are termed survivors. The support will be available for as long as they need it – much as the facilities at our centres were available to them during the difficult period of cancer treatment ')}
      </div>  
      </p></div>
    </div>
    </div>
  )
};

export default Benefeciaries;
