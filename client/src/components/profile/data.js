const profile_styles = {
    'profile-link':
        'block p-6 max-w-sm rounded-lg border border-gray-200 shadow-md   transition ease-in-out delay-100 bg-white hover:-translate-y-1 hover:scale-110  hover:bg-custom-primary-dark duration-300',
};

const schedule_meet_styles = {
    links: 'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-custom-primary rounded-lg hover:bg-custom-primary-900 focus:ring-4 focus:outline-none focus:ring-blue-300 ',
};

const profile_data = {
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

export { profile_styles, schedule_meet_styles, profile_data };
