import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
min-height: 2vh;
width:100vw;
background-color: #C4F1F9;
opacity: 0;
font-size: 2vw;
font-weight: 1000;
position: relative;
background-color:${props => props.theme.body};
`

const Box = styled.div`
    max-width: 8.5vw;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    white-space: nowrap;
`
const Btn = styled.button`
    display: inline-block;
    background-color: white;
    color: ${props => props => props.theme.black};
    outline: none;
    border: none;
    white-space: nowrap;
    font-size: ${props => props.theme.fontlg};
    justify-items: center;
    align-items: center;
    padding: 0.9rem 2.5rem;
    border-radius: 50px;
    cursor:pointer;
    position: relative;

    transition: all 0.2s ease;


    &:hover{
        transform: scale(0.9);
    }
    @media (max-width: 64em) {
        font-size: 2vw;
    }
`

function NavBar() {
    return (
        <Section>
            <Box>
            </Box>
        </Section>
    );
}

export default NavBar;