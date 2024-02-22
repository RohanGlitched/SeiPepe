import React from 'react';
import styled, { keyframes } from 'styled-components';
import picture2 from './../../../assets/ToolsAssets/tools.webp'
import { useWallet } from "@suiet/wallet-kit";
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect } from "react";


const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight} - 5vh)`};
width:100vw;
margin-top: 5vh;
position: relative;
background-color:${props => props.theme.body};
`
const Container = styled.div`
    width:90%;
    min-height: 80vh;
    margin: 0vw auto; //
    background-color: ${props=>props.theme.black};
    border-radius: 40px;
    overflow: visible;
    display: flex; // гибкий контейнер
    gap: 5vw;
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру

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
        width:80%;
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
    align-self: flex-start;
    flex-direction: column;
    margin-left: 3vw;
    gap: 2vh;
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

function ToolsHome() {
    const wallet = useWallet();
    const notifySucces = (message) => toast.success(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });
    const notifyError = (message) => toast.error(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });
    async function CopyToClipboard() {
        if (!wallet.connected) {
            notifyError("Please, Connect Wallet")
            return;
        }
        navigator.clipboard.writeText(wallet.address);
        return (
            notifySucces("Copied")
        )
    }
    const provider = new JsonRpcProvider(Network.DEVNET);
    useEffect(() => {
        if (!wallet.connected) return;
        if (wallet.chain?.name == 'sui:devnet') {
            alert("DEVNET");
            provider = new JsonRpcProvider(Network.DEVNET)
        } else if (wallet.chain?.name == 'sui:devnet') {
            alert('TESTNET')
            provider = new JsonRpcProvider(Network.TESTNET)
        }
    }, [wallet.connected])
    async function faucetSui() {
        if (!wallet.connected) {
            if (!wallet.connected) {
                notifyError("Please, Connect Wallet")
                return;
            }
            return
        }
        try {
            provider.requestSuiFromFaucet(wallet.address);
            notifySucces("Faucet is done");
        } catch (e) {
            notifyError("Something wenr wrong")
        }
    }
    return (
        <Section id = "tools-mainpage" >
            <Container>
                <Box1>
                    <Title>
                        Our Tools
                    </Title>
                    <SubText>
                    This section of the site is made to demonstrate and tell you about the capabilities of the Sui and the Move language.{'\n\n'}We believe in the future of {'\n'} Sui, and we hope that there will be {'\n'} more and more new projects on this blockchain, now we want to show {'\n'}the basic functions of this blockchain.
                    </SubText>
                    <ButtonContainer>
                        <Btn onClick={faucetSui}>
                            Faucet Sui To Your wallet
                        </Btn>
                        <Btn onClick={CopyToClipboard}>
                            Copy Address To Clipboard
                        </Btn>
                    </ButtonContainer>
                </Box1>
                <Box>

                    <VideoContainer>
                        <img src={picture2} alt="picture" />
                    </VideoContainer>
                </Box>
            </Container>
        </Section>
    );
}

export default ToolsHome;