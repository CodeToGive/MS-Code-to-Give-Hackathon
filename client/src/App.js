import React from 'react';
import Home from './components/home/Home';
import { Outlet, Link } from "react-router-dom";
import { Login } from './components/Login';

function App() {
    return (
        <div className=''>
            <Home />
            {/* <Link to="/">Login</Link> |{" "}
            <Outlet/> */}

        </div>
    );
}

export default App;
