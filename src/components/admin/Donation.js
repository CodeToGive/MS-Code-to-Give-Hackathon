import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ShowAllBtn from '../util/buttons/ShowAllBtn';
import { Pie } from 'react-chartjs-2';
import { pie_data as data } from './data';
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
                    <div className='shadow m-1 p-2'>
                        <h1 className='underline'>Transactions History</h1>
                        <div>
                            <ul className='list-none'>
                                {[1, 2, 3].map((el, idx) => {
                                    return (
                                        <li key={idx}>
                                            <div>
                                                <span>Transaction #1</span>
                                                <span>$500</span>
                                                <div>~ by User</div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className='my-2'></div> <ShowAllBtn />
                        </div>
                    </div>
                    <div className='shadow m-2 p-2'>
                        <h1 className='underline'>Aid Request</h1>
                        <div>
                            <ul className='list-none'>
                                {[1, 2, 3].map((el, idx) => {
                                    return (
                                        <li key={idx}>
                                            <div>
                                                <span>Aid #1</span>
                                                <span>$500</span>
                                                <div>~ by User</div>
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
