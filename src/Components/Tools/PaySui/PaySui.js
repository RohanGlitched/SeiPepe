import React from 'react';
import picture from './../../../assets/ToolsAssets/bigpict.webp'


import styled from 'styled-components';
import ButtonInterface from './ButtonInterface';


const Section = styled.section`
min-height: 100vh;
width:100vw;
position: relative;
background-color:${props => props.theme.body};
`

const Container = styled.div`
    width:90%;
    min-height: 90vh;
    margin: 0 auto; //
    background-color: ${props=>props.theme.black};
    border-radius: 50px;
    display: flex; // гибкий контейнер
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру

`

const Box = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImageContainer = styled.div`
    width: 100%;

    img{
        width: 100%;
        height: auto;
    }
`

function PaySui() {
    return (
        <Section>
            <Container>
                <Box>
                    <ImageContainer>
                        <img src={picture} alt='nftText' />
                    </ImageContainer>
                </Box>
                <Box>
                    <ButtonInterface/>
                </Box>
            </Container>
        </Section>
    );
}

export default PaySui;