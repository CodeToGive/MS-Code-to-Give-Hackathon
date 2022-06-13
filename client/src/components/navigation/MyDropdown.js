import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

export const MyDropdown = () => {
    const { t, i18n } = useTranslation();
    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }

    const actions = [
        {
            label: (
                <button
                    className=''
                    onSelect={() => handleClick('en')}
                    onClick={() => handleClick('en')}
                >
                    English
                </button>
            ),
            value: 1,
        },
        {
            label: (
                <button
                    className=''
                    onSelect={() => handleClick('hi')}
                    onClick={() => handleClick('hi')}
                >
                    Hindi
                </button>
            ),
            value: 2,
        },
        {
            label: (
                <button
                    className=''
                    onSelect={() => handleClick('ma')}
                    onClick={() => handleClick('ma')}
                >
                    Marathi
                </button>
            ),
            value: 3,
        },
        {
            label: (
                <button
                    className=''
                    onSelect={() => handleClick('kn')}
                    onClick={() => handleClick('kn')}
                >
                    Kannada
                </button>
            ),
            value: 4,
        },
        {
            label: (
                <button
                    className=''
                    onSelect={() => handleClick('gu')}
                    onClick={() => handleClick('gu')}
                >
                    Gujarati
                </button>
            ),
            value: 5,
        },
    ];

    return (
        <div className='w-auto flex flex-wrap'>
            <div className='m-2 bg-gray-100 '>Change Language</div>
            <Select
                options={actions}
                defaultValue={actions[0]}
                className='overflow-visible'
            />
        </div>
    );
};
