const profile_styles = {
    'profile-link':
        'block p-6 max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md   transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300',
};

const schedule_meet_styles = {
    link: 'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ',
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
