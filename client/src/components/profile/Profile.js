import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    'profile-link':
        'block p-6 max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md   transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300',
};

const Profile = () => {
    const data = {
        profile_options: [
            {
                title: 'Schedule Meet',
                description:
                    'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                link: '/schedule-meet',
            },
            {
                title: 'Upload Documents',
                description:
                    'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                link: '#',
            },
            {
                title: 'Apply to AID',
                description:
                    'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                link: '/apply-aid',
            },
        ],
    };

    return (
        <div className='h-screen overflow-x-scroll  bg-gray-200 p-10 '>
            <div className='grid items-center justify-center lg:grid-cols-3 md:grid-cols-2 gap-4 place-items-center m-auto'>
                {data.profile_options.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            to={item.link}
                            className={styles['profile-link']}
                        >
                            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
                                {item.title}
                            </h5>
                            <p className='font-normal text-gray-700 '>
                                {item.description}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Profile;
