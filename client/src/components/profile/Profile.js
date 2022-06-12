import React from 'react';
import { Link } from 'react-router-dom';
import { profile_styles as styles, profile_data as data } from './data';

const Profile = () => {
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
