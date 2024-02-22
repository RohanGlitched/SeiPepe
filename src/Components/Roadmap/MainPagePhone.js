import React from 'react';
import styled, { keyframes } from 'styled-components';
import picture2 from './../../assets/web31.webp'
import 'react-toastify/dist/ReactToastify.css';
import Typewriter from 'typewriter-effect'

const Container = styled.div`
    width:100%;
    height: 100vh;
    margin: 0vw auto; //
    overflow: visible;
    display: flex; // гибкий контейнер
    flex-direction: column-reverse;
    gap: 5vw;
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру

`

const Box = styled.div`
    width:100%;
    height:auto;
    display:flex;
    font-weight: 1000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: visible;
    .text-1{
        color: ${props => props.theme.orange}
    }
    .text-2{
        color: ${props=>props.theme.blue}
    }
`
const Box1 = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`



const VideoContainer = styled.div`
    width:100%;

    img{
        justify-self: flex-start;
        align-self: flex-start;
        width:80%;
        height:auto;
    }
`

const Title = styled.h2`
    font-size: 3vw;//{//props => props.theme.fontxxl}
    text-transform: capitalize;
    color: black;
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;
    align-self: center;
    text-align: center;
`

function MainPhonePage() {
    return (
        <Container>
            <Box>
                <Typewriter
                    options={{
                        autostart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('<span class = "text-1">Scroll Me!</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('<span class = "text-2">Mew Mew!</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }}
                />
            </Box>
            <Box1>
                <Title>
                    If you visit this page from a computer, you will see an animated roadmap
                </Title>
            </Box1>
            <Box>
                <VideoContainer>
                    <img src={picture2} alt="logo" />
                </VideoContainer>
            </Box>
        </Container>
    );
}

export default MainPhonePage;