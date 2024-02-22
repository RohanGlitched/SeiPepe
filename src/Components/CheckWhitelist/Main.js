import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import picture from '../../assets/pict1.webp'
import {validWLWallets, validOGWallets} from './ValidWallets'

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight} - 5vh)`};
width:100vw;
margin-top: 5vh;
position: relative;
background-color:${props => props.theme.body};
`
const Container = styled.div`
    width:90%;
    min-height: 70vh;
    margin: 0vw auto; //
    background-color: ${props => props.theme.black};
    border-radius: 40px;
    overflow: visible;
    display: flex;
    gap: 10vw;
    justify-content: center;
    align-items: center;
    @media (max-width: 64em) {
        flex-direction: column;
        width: 100%;
        border-radius: 0px;
        gap:5vh
    }

`

const Box = styled.div`
    width:40%;
    height:auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: visible;
`
const Box1 = styled.div`
    width:40%;
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
        width:110%;
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
    white-space: nowrap;
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
`
const ButtonContainer = styled.div`
    display: flex;
    justify-self: flex-start;
    align-self: center;
    flex-direction: column;
    gap: 2vh;
    margin-top: 5vh;
`
const Btn = styled.button`
    display: inline-block;
    background-color: #DD6B20;
    color: ${props => props => props.theme.white};
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
const MainTitle = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: ${props => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 2px solid ${props => props.theme.black};
    width: fit-content;

    @media (max-width: 64em) {
        font-size: 5vw;
        color:#272727;
    }

`

export const Input = styled.input`
    border: 0px;
  border-radius: 20px;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
  outline: none;
  box-shadow: 0 -1vh 2vw rgba(255, 255, 255, 0.2);
`;

export const StatusText = styled.p`
  color: ${props => props.theme.orange};
  font-size: 1.5vw;
  margin: 0;
`;


function Main() {
    const [wallet, setWallet] = useState('');
    const [isValid, setIsValid] = useState(-1);

    const handleChange = (e) => {
        const value = e.target.value;
        setWallet(value);
        if (validOGWallets.includes(value)) {
            setIsValid(2);
        } else if (validWLWallets.includes(value)) {
            setIsValid(1);
        } else {
            setIsValid(0);
        }
    };
    return (
        <Section id="tools-mainpage" >
            <MainTitle>
                Check your Whitelist or OG here!
            </MainTitle>
            <Container>
                <Box>
                    <VideoContainer>
                        <img src={picture} />
                    </VideoContainer>
                </Box>
                <Box1>

                    <Input
                        type="text"
                        value={wallet}
                        onChange={handleChange}
                        placeholder="Put your wallet address"
                        isValid={isValid}
                    />
                    {isValid !== null && (
                        <StatusText isValid={isValid}>
                            {isValid == 2 ? 'You are OG' : isValid == 1 ? 'You are not whitelisted' : "You are eligible to public mint"}
                        </StatusText>
                    )}
                    <ButtonContainer>
                        <a href="https://sui.bluemove.net/launchpad-detail/hungry-kitties">
                            <Btn>
                                Check out launch on BlueMove
                            </Btn>
                        </a>
                    </ButtonContainer>
                </Box1>
            </Container>
        </Section >
    );
}

export default Main;