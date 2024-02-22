import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const Btn = styled.button`
    display: inline-block;
    background-color: #DD6B20;
    color: ${props => props => props.theme.white};
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
        :hover{
            transform: none;
        }
    }
`

function Button({text, link, funct}) {
    return (
        <Btn onClick={funct}>
            <a href = {link} aria-label = {text} target = "_blank" rel = "noreferrer">
                {text}
            </a>
        </Btn>
    );
}

export default Button;