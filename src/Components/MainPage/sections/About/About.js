import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Carousel from './Carousel';
import Typewriter from 'typewriter-effect'



const Section = styled.section`
    min-height: 100vh;
    width:100%;
    background-color: white;
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
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру
    border-radius: 40px;

    @media (max-width: 70em) {
        width: 85%;

        &>*:last-child{
            width: 90%;
        }
    }


    @media (max-width: 64em) {
        width: 100%;
        border-radius: 0px;
        flex-direction: column;
        gap: 0vh;

        &>*:last-child{
            width: 90%;
            margin-top: -0vh ;
        }
    }

`

const Box = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 64em) {
        width: 100%;
        height: 50%;

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
        align-self: center;
        text-align: center;
        color: ${props=>props.theme.orange};
        font-size: 5vw;

    }
`

const SubText = styled.p`
    font-size: 1.3vw;
    text-transform: none;
    color: ${props => props.theme.white};
    align-self: flex-start;
    text-align: justify;
    width: 80%;
    margin: 1.5rem auto;
    font-weight: 400;
    white-space: pre-line;
    @media (max-width: 64em) {
        align-self: center;
        text-align: center;
        font-size: 3vw;
    }
`

const SubTextLight = styled.p`
    font-size: 1.5vw;
    text-transform: capitalize;
    color: ${props => props.theme.white};
    align-self: flex-start;
    text-align: justify;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
    @media (max-width: 64em) {
        align-self: center;
        text-align: center;

    }
`

const MainTitle = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: ${props=>props.theme.black};
    display: flex;
    justify-content: center;
    border-bottom: 2px solid ${props=>props.theme.black};
    align-items: center;
    margin: 1rem auto;
    width: fit-content;
    @media (max-width: 64em) {
        font-size: 5vw;
        color:white;
        border-bottom: 2px solid ${props=>props.theme.white};
    }

`

function About() {
    return (
        <Section id="about">
            <MainTitle>
                About Us
            </MainTitle>
            <Container>
                <Box>
                    <Carousel />
                </Box>
                <Box>
                    <Title>
                        SEI PEPE
                    </Title>
                    <SubText>
                     Pepe set to conquer the $SEI scene ! A community who gives back and helps people making $ 
                    {'\n\n'}Beyond our stunning 969 - piece NFT collection, we're thrilled to introduce the $SEIPEPE token—a gateway to a revolutionary experience. {'\n\n'}Embracing innovation, we're exploring the possibility of launching a casino on our platform with a groundbreaking 0% house edge.{'\n\n'}Sei Pepe is not just an NFT collection; it's a dynamic ecosystem where creativity, blockchain, and gaming unite to create an unparalleled experience for our community. Join us as we embark on this journey, shaping the future of digital art and entertainment.
                    </SubText>
                    <SubTextLight>
                    </SubTextLight>
                </Box>
            </Container>
        </Section>
    );
}

export default About;
