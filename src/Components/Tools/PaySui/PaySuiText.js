import React from 'react';
import picture from './../../../assets/ToolsAssets/dinofree.webp'


import styled from 'styled-components';


const Section = styled.section`
margin-top: 15vh;
min-height: 100vh;
width:100vw;
position: relative;
background-color:${props => props.theme.body};
`

const Container = styled.div`
    width:90%;
    min-height: 90vh;
    margin: 0 auto; //
    background-color: white;
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
const Title = styled.h2`
    font-size: 3vw;//{//props => props.theme.fontxxl}
    text-transform: capitalize;
    color: #DD6B20;
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;
`

const SubText = styled.p`
    font-size: 1.5vw;
    text-transform: none;
    color: black;
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
    white-space: pre-line;
`

const SubTextLight = styled.p`
    font-size: 1.5vw;
    text-transform: capitalize;
    color: black;
    opacity: 0.6;
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
`

function PaySuiText() {
    return (
        <Section id = "paysui">
            <Container>
                <Box>
                    <ImageContainer>
                        <img src={picture} alt='nftText' />
                    </ImageContainer>
                </Box>
                <Box>
                    <Title>
                        PaySui - Fast distribution of funds
                    </Title>
                    <SubText>
                        This feature is the most important for our team. With its help, we can easily transfer funds to shelters, while almost giving up the human error factor. {'\n'} {'\n'}
                        For this function to work, you need to provide it with a list of addresses and a list of quantities. It is important that the number in the i place in the list of quantities will be sent to the i address. Therefore, if you implement this function, be careful with the size of the arrays.
                        {'\n\n'}The feature is also handy if you need to transfer your SUI to multiple wallets in a more convenient way than doing multiple transactions.
                    </SubText>
                </Box>
            </Container>
        </Section>
    );
}

export default PaySuiText;