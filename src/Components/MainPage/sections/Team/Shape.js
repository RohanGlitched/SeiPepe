import React from 'react';
import styled from 'styled-components';



const Item = styled.div`
    width:16vw;
    height: 40vh;
    padding: 0vh 0vw;
    color: #DD6B20;
    margin: 10vh 0vw;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
    border: 0px solid ${props => props.theme.text};
    border-radius: 20px;
    @media (max-width: 64em) {
        display: none;
    }
`
const Title = styled.h2`
    font-size: 2vw;//{//props => props.theme.fontxxl}
    text-transform: capitalize;
    color: black;
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;
    @media (max-width: 64em) {
        font-size: 5vw;
        white-space: nowrap;
        align-self: center;
        text-align: center;
        color: black;
    }
`

const SubText = styled.p`
    font-size: 1.5vw;
    text-transform: none;
    color: black;
    align-self: flex-start;
    width: 80%;
    margin: 2rem auto;
    font-weight: 400;
    @media (max-width: 64em) {
        font-size: 2vw;
        align-self: center;
        text-align: center;
        color: black;
    }
`


function Shape({title, text}) {
    return (
        <Item>
            <Title>
                {title}
            </Title>
            <SubText>
                {text}
            </SubText>
        </Item>
    );
}

export default Shape;