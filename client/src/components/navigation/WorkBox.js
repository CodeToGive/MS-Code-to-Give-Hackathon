import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseMedical,faShuttleVan, faBowlFood, faBookOpen,faGuitar,faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
import { useTranslation,Trans } from 'react-i18next';

export const WorkBox = () => {
    const objWork = [
        [faHouseMedical, 'Safe and Hygienic Housing'],
        [faShuttleVan, 'Transport To and From Treatment'],
        [faBowlFood, 'Cooking Facilities and Nutritious Rations'],
        [faBookOpen, 'Value Based Education'],
        [faGuitar, 'Recreation'],
        [faPeopleGroup, 'Counselling for Children and Parents'],

    ];
    const { t, i18n } = useTranslation();

  return (
    <div className=' grid grid-cols-3 p-2'>
        {
            objWork.map((obj)=>(
                <div className='m-2 bg-gray-400 p-3 rounded-[10px] '>
                <FontAwesomeIcon className='m-auto bg-gray-200 p-1 rounded-[8px]' icon={obj[0]}/>
                <div>{t(obj[1])}</div>
                </div>
            ))
        }
    </div>
  )
}
