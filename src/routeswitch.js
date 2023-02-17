import React from 'react';
import { HashRouter, Routes, Route} from 'react-router-dom';
import AboutPage from './components/about';
import Project from './components/project'
import App from './App';


function RouteSwitch() {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<App route={<AboutPage />} />} />
                <Route path="/projects" element={<App route={<Project />} />} />
                <Route path="/contactme" element={<App route={<AboutPage />} />} />
            </Routes>
        </HashRouter>
    )
}

export default RouteSwitch;