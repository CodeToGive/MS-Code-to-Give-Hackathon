import React, { useState } from 'react';
import ReactFlow, { Controls, Background } from 'react-flow-renderer';
import { initialNodesData, styles } from './data';
import { DetailsOfHowItWorks } from './DetailsOfHowItWorks';
import { useTranslation,Trans } from 'react-i18next';

const HowItWorks = () => {
    const { t, i18n } = useTranslation();
    const nodes = initialNodesData.map((node) => {
        return {
            id: node.id,
            data: {
                label: (
                    <div className={styles['node']}>
                        <h5 className={styles['node_text']}>
                            {node.data_label}
                        </h5>
                    </div>
                ),
            },
            position: node.position,
        };
    });

    const edges = [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e1-4', source: '1', target: '4', animated: true },
        { id: 'e2-2a', source: '2', target: '2a', animated: true },
        { id: 'e2-2b', source: '2', target: '2b', animated: true },
        { id: 'e2-2c', source: '2', target: '2c', animated: true },
        { id: 'e2-2d', source: '2', target: '2d', animated: true },
        { id: 'e41-4a', source: '41', target: '4a', animated: true },
        { id: 'e41-4b', source: '41', target: '4b', animated: true },
        { id: 'e41-4c', source: '41', target: '4c', animated: true },
        { id: 'e4-41', source: '4', target: '41', animated: true },
    ];

    return (
        <div>
            <div className='container h-[600px] m-auto '>
                <DetailsOfHowItWorks/>
                <ReactFlow id='applyToAid' nodes={nodes} edges={edges} fitView>
                    <Controls />
                    <Background color='#aaa' gap={16} />
                </ReactFlow>
            </div>
        </div>
    );
};

export default HowItWorks;
