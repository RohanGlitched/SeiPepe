import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
    display: inline-block;
    background-color: white;
    color: black;
    outline: none;
    border: none;

    font-size: ${props => props.theme.fontsm};
    padding: 0.9rem 2.5rem;
    border-radius: 50px;
    cursor:pointer;
    position: relative;

    transition: all 0.2s ease;


    &:hover{
        transform: scale(0.9);
    }
`

function Button({ text, link, funct }) {
    return (
        <Inp>

        </Inp>
    );
}

export default Button;