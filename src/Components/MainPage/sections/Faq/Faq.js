import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import quest from './../../../../assets/questions.webp'


const Section = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-color: white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 64em) {
        min-height: 0vh;
        background-color: white;
        height: 100vh;
    }
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: #272727;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 2px solid ${props => props.theme.body};
    width: fit-content;
    @media (max-width: 64em) {
       color:#DD6B20;
       font-size: 5vw;

    }

`

const Container = styled.div`
    width:85%;
    background-color: white;
    border-radius: 50px;
    margin: 2rem auto;
    display: flex;
    gap: 10vw;
    color: white;
    justify-content: space-between;
    align-content: center;
    @media (max-width: 64em) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const Box = styled.div`
    width: 55%;
    img{
        justify-self: center;
        align-self: center;
        width: 100%;
        height: auto;
    }
`
const ImageContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
        height: auto;
    }
    @media (max-width: 64em) {
        width: 80%;
    }
`



function Faq() {
    /*
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        let element = ref.current;
        
        ScrollTrigger.create({
            trigger: element,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
            scrub: true,
            markers: true,

        })

        return () => {
            ScrollTrigger.kill();
        };
    }, [] )
    */
    return (
        <Section id="FAQ">
            <Container>
                <ImageContainer>
                    <img src = {quest} alt = "questions"/>
                </ImageContainer>
                <Box>
                    <Title>
                       FAQ
                    </Title>
                    <Accordion title={"How are you going to develop further?"} children = {"Only PEPE knows about that!"} />
                    <Accordion title={"Why on SEI?"} children = {"SEI needs PEPE thats why!"}/>
                    <Accordion title={"What Supply?"} children = {"This will be 969 unique nft"}/>
                    <Accordion title={"How to get PEPElist?"} children = {"Follow the information in our social networks. There will be many different ways"}/>
                </Box>
            </Container>

        </Section>
    );
}

export default Faq;