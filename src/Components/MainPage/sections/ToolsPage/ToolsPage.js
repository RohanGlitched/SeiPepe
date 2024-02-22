import React from 'react';
import styled from 'styled-components';

import GifContainer from './GifContainer';

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
    background-color: ${props=>props.theme.black};
    display: flex; // гибкий контейнер
    gap: 5vw;
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру
    border-radius: 40px;
    @media (max-width: 64em) {
        flex-direction: column;
        width: 100%;
        align-items: center;
    }

`

const Box = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3vh;
    img{
        width: 70%;
        height: auto;
    }
    @media (max-width: 64em) {
        margin-top: -5vh;
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

const SubText = styled.p`
    font-size: 1.5vw;
    text-transform: none;
    color: ${props => props.theme.white};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
    white-space: pre-line;
    @media (max-width: 64em) {
        font-size: 3vw;
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
    margin-left: 3vw;
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
        font-size: 4vw;
        align-self: center;
        text-align: center;
    }
`

function ToolsPage() {
    return (
        <Section id = "tools">
            <MainTitle>
                Tools
            </MainTitle>
            <Container>
                <GifContainer/>
                <Box>
                    <Title>
                        Try our Tools
                    </Title>
                    <SubText>
                    This page will allow you to take a closer look at the SUI blockchain.
                    </SubText>
                    <Btn>
                        <a href = "/tools">
                            Our Tools
                        </a>
                    </Btn>
                </Box>
            </Container>
        </Section>
    );
}

export default ToolsPage;