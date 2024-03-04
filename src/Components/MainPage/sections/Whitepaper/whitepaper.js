import React from 'react';
import styled from 'styled-components';

import logo from './../../../../assets/whitepaper.webp'
import roadmap from  './roadmap.png'

const Section = styled.section`
    min-height: 100vh;
    width:100%;
    color: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: 64em) {
        background-color: #272727;
    }
`

const Container = styled.div`
    width:85%;
    min-height: 80vh;
    margin: 0 auto; //
    background-color: #272727;
    display: flex; // гибкий контейнер
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру
    border-radius: 40px;
    @media (max-width: 64em) {
        flex-direction: column;
        width: 100%;
        height:90%;
        border-radius: 0px;
        gap:5vh
    }
`

const Box = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction: column;
    gap: 3vh;
    justify-content: center;
    align-items: center;
    img{
        width: 150%;
        height: 150%;
        @media (max-width: 64em) {
            width: 100%;
        }
    }
`

const Title = styled.h2`
    font-size: 3vw;//{//props => props.theme.fontxxl}
    text-transform: capitalize;
    color: ${props => props.theme.white};
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;
    @media (max-width: 64em) {
        font-size: 5vw;
        align-self: center;
        text-align: center;
    }
`

const MainTitle = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 2px solid ${props => props.theme.black};
    width: fit-content;

    @media (max-width: 64em) {
        font-size: 5vw;
        color:white;
        border-bottom: 2px solid ${props => props.theme.white};
    }

`

const Btn = styled.button`
    display: inline-block;
    background-color: #DD6B20;
    align-self: flex-start;
    margin-left: 4vw;
    color: white;
    outline: none;
    border: none;
    white-space: nowrap;
    direction: flex;
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
        font-size: 3vw;
        align-self: center;
        text-align: center;
        :hover{
            transform: none;
        }
    }
`
function Whitepaper() {
    return (
        <Section id="whitepaper">
            <MainTitle>
                Whitepaper
            </MainTitle>
            <Container>
                <Box>
                    <img src={roadmap}  />
                </Box>
            </Container>
        </Section>
    );
}

export default Whitepaper;