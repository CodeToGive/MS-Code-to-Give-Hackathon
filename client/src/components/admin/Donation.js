import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ShowAllBtn from '../util/buttons/ShowAllBtn';
import { Pie } from 'react-chartjs-2';
import { pie_data as data } from './data';
import { DesignBox } from '../navigation/DesignBox';
import { WorkBox } from '../navigation/WorkBox';
ChartJS.register(ArcElement, Tooltip, Legend);

const Donation = () => {
    return (
        <div className='border-2 rounded-lg'>
            <div className='md:flex md:flex-wrap my-2 mx-auto p-2 place-content-center'>
                <div className='m-1 p-1 mx-auto md:mx-4 lg:mx-16 justify-center'>
                    <Pie
                        className='mx-auto max-h-80 max-w-[320px] aspect-square'
                        data={data}
                    />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 m-2 p-1 grow '>
                    <div className='shadow m-1 p-3 bg-gray-100 '>
                        <h1 className='underline m-2 font-bold text-xl'><DesignBox text={'Transactions History'}></DesignBox></h1>
                        <div>
                            <ul className='list-none  grid grid-cols-2 '>
                                {[1, 2, 3].map((el, idx) => {
                                    return (
                                        <li key={idx} className='p-2 rounded-[10px] bg-white m-3 grid grid-cols-2'>
                                            <div className=''>
                                                <span className='font-bold mr-7'>Transaction #1</span>
                                                
                                                <div className='bg-gray-100 rounded-[5px] p-1'>~ by User </div>
                                            </div>
                                            <div className='bg-custom-primary p-1 rounded-[5px] grid items-center justify-center'>
                                            <span className='font-bold'>$500</span>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className='my-2'></div> <ShowAllBtn />
                        </div>
                    </div>
                    <div className='shadow m-2 p-3 bg-gray-100'>
                        <h1 className='underline m-1 font-bold text-xl'><DesignBox text={'Aid Request'}/></h1>
                        <div>
                            <ul className='list-none grid grid-cols-2 '>
                                {[1, 2, 3].map((el, idx) => {
                                    return (
                                         <li key={idx} className='p-2 rounded-[10px] bg-white m-3 grid grid-cols-2'>
                                         <div className=''>
                                             <span className='font-bold mr-7'>Aid #1</span>
                                             
                                             <div className='bg-gray-100 rounded-[5px] p-1'>~ by User </div>
                                         </div>
                                         <div className='bg-custom-primary p-1 rounded-[5px] grid items-center justify-center'>
                                         <span className='font-bold'>$500</span>
                                         </div>
                                     </li>
                                    );
                                })}
                            </ul>
                            <div className='my-2'></div> <ShowAllBtn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;
