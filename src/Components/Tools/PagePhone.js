import React from 'react';
import styled, { keyframes } from 'styled-components';
import picture2 from './../../assets/ToolsAssets/tools.webp'
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Button';


const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight} - 5vh)`};
width:100vw;
margin-top: 10vh;
position: relative;
background-color:${props => props.theme.body};
`
const Container = styled.div`
    width:100vw;
    max-height: 90vh;
    background-color: White;
    overflow: visible;
    display: flex; // гибкий контейнер
    flex-direction: column-reverse;
    gap: 5vh;
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру

`

const Box = styled.div`
    width:80%;
    height:auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: visible;
`
const Box1 = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const rotate = keyframes`
    100%{
        transform: rotate(1turn);
    }
`



const VideoContainer = styled.div`
    width:100%;

    img{
        width:100%;
        height:auto;
    }
`

const Title = styled.h2`
    font-size: 3vw;//{//props => props.theme.fontxxl}
    text-transform: capitalize;
    color: #DD6B20;
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;
    align-self: center;
    text-align: center;
`

const SubText = styled.p`
    font-size: 1.5vw;
    text-transform: none;
    color: ${props => props.theme.body};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
    white-space: pre-line;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-self: flex-start;
    align-self: flex-start;
    flex-direction: column;
    margin-left: 3vw;
    gap: 2vh;
`
const Btn = styled.button`
    display: inline-block;
    background-color: #DD6B20;
    color: ${props => props => props.theme.body};
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
`

function PhonePage() {
    return (
            <Container>
                <Box>
                    <Button text = "Go Home" link={"/"}/>
                </Box>
                <Box1>
                    <Title>
                        Our Tools Work Only in Desktop-version
                    </Title>
                </Box1>
                <Box>
                    <VideoContainer>
                    <img src = {picture2} alt = "logo"/>
                    </VideoContainer>
                </Box>
            </Container>
    );
}

export default PhonePage;