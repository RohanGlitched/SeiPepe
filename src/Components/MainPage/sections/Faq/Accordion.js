import React from 'react';
import styled from 'styled-components';
import {useState} from 'react'

const Container = styled.div`
    cursor: pointer;
    background-color: rgba(221, 107, 32, 1);
    padding: 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    border-radius: 40px;
    margin: 3rem 3rem;
    color: ${props=>props.theme.white};
    @media (max-width: 64em) {
        border-radius: 20px;
        width: 50vw;
        margin: 5vh auto;
    }
`

const Title = styled.div`
    font-size: ${props=>props.theme.fontlg};
    margin-left: 1vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    @media (max-width: 64em) {
        align-self: center;
        text-align: center;
        font-size: 3vw;
    }
`

const Reveal = styled.div`
    display:${props=>props.clicked ? 'block' : 'none'};
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: white;
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    line-height: 1.1rem;
    margin-left: 2vw;
    @media (max-width: 64em) {
        align-self: center;
        text-align: center;
        font-size: 3vw;
    }
`

const Name = styled.div`
    display: flex;
    align-items: center;
`
const Indicator = styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.theme.fontxxl};
`

function Accordion({title, children}) {
    const [collapse, setCollapse] = useState(false);
    return (
        <Container>
            <Title onClick = {() => setCollapse(!collapse)}>
                <Name>
                    <Title>
                        {title}
                    </Title>    
                </Name>
                {
                    collapse?
                    <Indicator>
                        -
                    </Indicator>:<Indicator>+</Indicator>
                }
            </Title>
            <Reveal clicked = {collapse}>
                {children}
            </Reveal>
        </Container>
    );
}

export default Accordion;