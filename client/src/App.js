import React from 'react';
import Home from './components/home/Home';
import { Scrollbars } from 'react-custom-scrollbars';

function App() {
    return (
        <Scrollbars style={{ height: '100vh' }}>
            <div className=''>
                <Home />
            </div>
        </Scrollbars>
    );
}

export default App;
