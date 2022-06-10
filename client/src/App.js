import React from 'react';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';
import Login from './components/authentication/Login';
import AppyAID from './components/profile/ApplyAid';
import ProfilePageFinancial from './components/profile/ProfilePageFinancial';
import Profile from './components/profile/Profile';
import HowItWorks from './components/how-it-works/HowItWorks';
import ScheduleMeet from './components/profile/ScheduleMeet';

function App() {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/how-it-works' element={<HowItWorks />} />
                    <Route path='/schedule-meet' element={<ScheduleMeet />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/apply-aid' element={<AppyAID />} />
                    <Route
                        path='ProfilePageFinancial'
                        element={<ProfilePageFinancial />}
                    />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
