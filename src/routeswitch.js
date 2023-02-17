import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './components/about';
import Project from './components/project'
import App from './App';


function RouteSwitch() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App route={<AboutPage />} />} />
                <Route path="/projects" element={<App route={<Project />} />} />
                <Route path="/contactme" element={<App route={<AboutPage />} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;