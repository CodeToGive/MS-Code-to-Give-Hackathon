import React, { useState } from 'react';

const styles = {
    'tab-link':
        'nav-link w-full block font-medium  text-xs  leading-tight  uppercase  border-x-0 border-t-0 border-b-2 border-blue-500 px-6 py-3  my-2 hover:border-transparent hover:bg-gray-100  focus:border-transparent',
};

const navtabs = [
    {
        no: 0,
        name: 'Admin Account Creation',
        id: 'admin-account-creation',
    },
    {
        no: 1,
        name: 'Meet Requests',
        id: 'meet-requests',
    },
    {
        no: 2,
        name: 'Document Verification',
        id: 'document-verification',
    },
];

const Requests = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <ul
                className='nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 '
                id='tabs-tab'
                role='tablist'
            >
                {navtabs.map((tab, idx) => {
                    return (
                        <li
                            key={tab.no}
                            className='nav-item mx-2 text-center'
                            role='presentation'
                        >
                            <button
                                href={`tabs-${tab.id}`}
                                className={`${styles['tab-link']} ${
                                    idx !== activeTab && 'border-transparent'
                                }`}
                                id={`tabs-${tab.id}-tab`}
                                onClick={() => setActiveTab(tab.no)}
                            >
                                {tab.name}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div className='tab-content' id='tabs-tabContent'>
                {navtabs.map((tab, idx) => {
                    return (
                        <div
                            className={`'tab-pane fade show active m-1 p-1 grow' ${
                                tab.no !== activeTab && 'hidden'
                            }`}
                        >
                            <div className='shadow rounded-lg p-2'>
                                <ul>
                                    {[1, 2, 3].map((el, idx) => {
                                        return (
                                            <li key={idx}>
                                                {tab.name} #{el}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Requests;
