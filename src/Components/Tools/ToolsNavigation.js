import React from 'react';
import styled from 'styled-components';
import { useWallet } from "@suiet/wallet-kit";
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Button';
import { useState, useEffect } from "react";


const Section = styled.section`
    width:100vw;
    background-color: ${props => props.theme.body};
`

const NavBar = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:85%;
    height:${props => props.theme.navHeight};
    margin: 0 auto;

    img{
        width: 8rem;
        height: 8rem;
    }

`;

const Menu = styled.ul`
    display:flex;
    justify-content:space-berween;
    align-items:center;
    list-style: none;
`

const MenuItem = styled.li`
    margin:0 1rem;
    color:${props => props.theme.text};
    cursor:pointer;
    
    &::after{
        content:' ';
        display: block;
        width:0%;
        height:2px;
        background: ${props => props.theme.text};
        transition:width 0.3s ease;
    }
    
    &:hover::after{
        width:100%;
    }
`



const ToolsNavigation = () => {

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
        <>
            <Section>
                <NavBar>
                    <Button text="Copy Address To Clipboard" link='' funct={CopyToClipboard} />
                    <Button onClick={faucetSui} text="Faucet Sui" link='' funct={faucetSui} />
                <Menu>
                    <MenuItem>Mint Our NFT</MenuItem>
                    <MenuItem>Pay Sui</MenuItem>
                    <MenuItem>Sui Objects</MenuItem>
                    <MenuItem>Generate NFT with our assets</MenuItem>
                </Menu>
            </NavBar>
        </Section>
        </>
    );
};

export default ToolsNavigation;