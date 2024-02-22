import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from './../../../../assets/tools.webm'
import logo1 from './../../../../assets/tools.png'

const GifContaineer = styled.div`
    width:100%;
    border-radius: 50px;

    video{
        margin-left: 5vw;
        width:90%;
        height:70vh;
        @media (max-width: 64em) {
            width: 100%;
            margin-left: 0;
            display: none;
        }
    }
    img{
        display: none;
        @media (max-width: 64em) {
            display: flex;
            width: 100%;
            margin-left: 0;
        }
    }
    @media (max-width: 64em) {
        display: flex;
        margin-bottom: 10vh;
    }
`

function GifContainer() {
    return (
            <GifContaineer>
                <video src={logo} autoPlay muted loop />
                <img src = {logo1}/>
            </GifContaineer>
    );
}

export default GifContainer;