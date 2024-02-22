import React from 'react';
import Navigation from '../Navigation.js';
import Footer from '../Footer.js';
import Main from './Main.js';


function CheckWhitelist() {
    return (
        <>
            <Navigation/>
            <Main/>
            <Footer/>
        </>
    );
}

export default CheckWhitelist;