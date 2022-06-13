const styles = {
    node: ' block max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md hover:-translate-y-1 hover:scale-110  hover:bg-custom-primary-dark bg-custom-primary  duration-300',
    node_text: 'text-xl font-bold tracking-tight text-gray-900 ',
};
const initialNodesData = [
    {
        id: '1',
        type: 'input',
        data_label: 'Apply AID',
        position: { x: 250, y: 25 },
    },
    {
        id: '2',
        data_label: 'Financial AID',
        position: { x: 50, y: 125 },
    },
    {
        id: '4',
        data_label: 'Non Financial AID',
        position: { x: 450, y: 125 },
    },
    {
        id: '2a',
        data_label: 'Education',
        position: { x: -350, y: 250 },
    },
    {
        id: '2b',
        data_label: 'Health',
        position: { x: -175, y: 250 },
    },
    {
        id: '2c',
        data_label: 'Livelihood',
        position: { x: 0, y: 250 },
    },
    {
        id: '2d',
        data_label: 'Life Skills',
        position: { x: 175, y: 250 },
    },
    {
        id: '41',
        data_label: 'Recommend',
        position: { x: 450, y: 250 },
    },
    {
        id: '4a',
        data_label: 'Job',
        position: { x: 350, y: 375 },
    },
    {
        id: '4b',
        data_label: 'Counselling',
        position: { x: 525, y: 375 },
    },
    {
        id: '4c',
        data_label: 'Business',
        position: { x: 700, y: 375 },
    },
];

export { initialNodesData, styles };
