import React from 'react';
import Home from './sections/Home/Home';
import Faq from './sections/Faq/Faq';
import About from './sections/About/About';
import Team from './sections/Team/Team';
import Shelters from './sections/Shelters/Shelters';
import Whitepaper from './sections/Whitepaper/whitepaper';
import ToolsPage from './sections/ToolsPage/ToolsPage';
import Partners from './sections/Partners/Partners';
import Navigation from '../Navigation';
import Footer from '../Footer';


function MainPage() {
    return (
        <>
            <Navigation/>
            <Home/>
            <About/>
            <Whitepaper/>
            <Team/>
            <Faq/>
            <Footer/>
        </>
    );
}

export default MainPage;