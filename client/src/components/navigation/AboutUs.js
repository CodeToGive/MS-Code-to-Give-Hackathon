import React from 'react';
import { DesignBox } from './DesignBox';
import { WorkBox } from './WorkBox';
import { useTranslation, Trans } from 'react-i18next';

export const AboutUs = () => {
    const support_det = [
        'Education',
        'Health',
        'Counselling',
        'Career Guidance',
        'Employment',
        'Insurance',
        'Marriage',
        'Children with special needs',
    ];
    const { t, i18n } = useTranslation();

    return (
        <div className='p-5'>
            <div className='font-serif bg-gray-200 rounded-[20px] p-6'>
                <div className='mb-6 mt-3'>
                    <h1 className='font-bold text-3xl text-custom-primary mb-2'>
                        {t('Our Initiative')}
                    </h1>
                    <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {t(
                            'We believe every child has the right to fulfil her aspirations and our credo has always been ‘Once a St. Judes child is always a St. Judes child’. In keeping with this vision, our new vertical St. Judes for Life has been established in the memory of'
                        )}{' '}
                        {<DesignBox text={t('Mrs. Rani Vicaji')} />},
                        {t(
                            ' to ensure that these children who have won the battle against cancer are able to fulfil their potential. They come from underprivileged families who had made great sacrifices to ensure that the child was treated successfully for cancer. We have learnt of several new challenges they may face while they try to become self-reliant and independent. To this end our new vertical,'
                        )}{' '}
                        {<DesignBox text={t('St. Judes')} />}
                        {t(
                            ' for Life will continue to provide support to our recovered as need arises'
                        )}
                        .
                    </div>
                </div>

                <h1 className='font-bold text-2xl text-custom-primary mb-2'>
                    {t('Vision')}
                </h1>
                <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                    {
                        <DesignBox
                            text={t('St. Judes India ChildCare Centres')}
                        />
                    }
                    {t(
                        ' provide every child suffering from cancer, irrespective of economic status, a chance at surviving the disease and leading a full, healthy, and happy life. The children come from underprivileged families who had made great sacrifices to ensure that the child was treated successfully for cancer. However, there are new challenges they may face while they try to become self-reliant and independent. To this end, the new vertical,'
                    )}
                    {<DesignBox text={t('St. Judes for Life (SJFL)')} />}{' '}
                    {t(
                        'will continue to provide support to those recovered as need arises.'
                    )}
                </div>
                <h1 className='font-bold text-2xl text-custom-primary mb-2 mt-5'>
                    {t('Mission')}
                </h1>
                <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {t(
                        ' To ensure that timely and appropriate assistance is available to St. Judes alumni to complete their education, maintain good health and lead successful lives. From the time of their enrolment on completing five years since '
                    )}
                    {<DesignBox text={t(' diagnosis of cancer ')} />} ,
                    {t(
                        ' till they are independent and self-sufficient, St. Judes for Life will be available to provide appropriate intervention, directly or through experienced partners, to support, mentor and enable them to become upright contributing members of society.'
                    )}
                </div>

                <h1 className='font-bold text-2xl text-custom-primary mb-2 mt-5'>
                    {t('What We Do')}
                </h1>
                <div className='mb-5'>
                    {t(
                        'St. Jude India ChildCare Centres (St. Judes or SJICC) provides a home away from home for children undergoing cancer treatment. These children, accompanied by their parents, come from small villages and distant towns where medical treatment for cancer is not available.'
                    )}
                </div>
                <ul class='list-disc'>
                    {support_det.map((ele) => (
                        <li className='italic'>{t(ele)}</li>
                    ))}
                </ul>
                <WorkBox />
                <div className='mt-2 mb-1'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {t(
                        'We currently operate in nine cities across India, providing more than 480 families with a peaceful night’s sleep.'
                    )}
                </div>
                <div className=''>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {t(
                        'Each one of our family units is a space where the child has a bed to sleep on and the parents can sleep alongside the child. There is a cupboard for storage. There are shared kitchen facilities with vessels and kitchen tools, where mothers cook food as per their child’s choice. Additionally, there are common bathrooms with clean and hygienic toilets and bathing areas, as well as a place for the families to wash their clothes. All requirements have been thought of and provided to our families.'
                    )}
                </div>
            </div>

            <h1 className='font-bold text-2xl text-custom-primary mb-2'>
                Vision
            </h1>
            <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                {<DesignBox text={'St. Judes India ChildCare Centres'} />}{' '}
                provide every child suffering from cancer, irrespective of
                economic status, a chance at surviving the disease and leading a
                full, healthy, and happy life. The children come from
                underprivileged families who had made great sacrifices to ensure
                that the child was treated successfully for cancer. However,
                there are new challenges they may face while they try to become
                self-reliant and independent. To this end, the new vertical,{' '}
                {<DesignBox text={'St. Judes for Life (SJFL)'} />} will continue
                to provide support to those recovered as need arises.
            </div>
            <h1 className='font-bold text-2xl text-custom-primary mb-2 mt-5'>
                Mision
            </h1>
            <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To ensure that timely and
                appropriate assistance is available to St. Judes alumni to
                complete their education, maintain good health and lead
                successful lives. From the time of their enrolment on completing
                five years since {<DesignBox text={' diagnosis of cancer '} />}{' '}
                , till they are independent and self-sufficient, St. Judes for
                Life will be available to provide appropriate intervention,
                directly or through experienced partners, to support, mentor and
                enable them to become upright contributing members of society.
            </div>

            <h1 className='font-bold text-2xl text-custom-primary mb-2 mt-5'>
                What We Do
            </h1>
            <div className='mb-5'>
                St. Jude India ChildCare Centres (St. Judes or SJICC) provides a
                home away from home for children undergoing cancer treatment.
                These children, accompanied by their parents, come from small
                villages and distant towns where medical treatment for cancer is
                not available.
            </div>
            <ul class='list-disc'>
                {support_det.map((ele) => (
                    <li className='italic'>{ele}</li>
                ))}
            </ul>
            <WorkBox />
            <div className='mt-2 mb-1'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We currently operate in nine
                cities across India, providing more than 480 families with a
                peaceful night’s sleep.
            </div>
            <div clas>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Each one of our family units is a
                space where the child has a bed to sleep on and the parents can
                sleep alongside the child. There is a cupboard for storage.
                There are shared kitchen facilities with vessels and kitchen
                tools, where mothers cook food as per their child’s choice.
                Additionally, there are common bathrooms with clean and hygienic
                toilets and bathing areas, as well as a place for the families
                to wash their clothes. All requirements have been thought of and
                provided to our families.
            </div>
        </div>
    );
};
