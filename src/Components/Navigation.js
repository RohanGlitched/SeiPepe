import React from 'react';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import { Menu, MenuItem, ControlledMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { ConnectButton, useWallet } from '@suiet/wallet-kit';
import { useHistory, useLocation, useParams } from "react-router";
//import './../Styles/suiet-wallet-kit-custom.css'

import logo from './../assets/logo.webp'
import Button from './Button';
import Home from './MainPage/sections/Home/Home';


const Section = styled.section`
    width:90vw;
    margin-left: 5vw;
    margin-top: 2vh;
    background-color: ${props => props.theme.white};
    overflow: visible;
    justify-self: center;
    border-radius: 40px;
    @media (max-width: 64em) {
        /*1024px*/
       background-color: white;
       height: 5vh;
       width: 100vw;
    }
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
        margin-left: -5.5vw;
        transition: all 0.5s ease;
        @media (max-width: 64em) {
        /*1024px*/
            width: 20vw;
            height: 20vw;
        }
    }
    img:hover{
        transform: scale(1.1);
    }
`;

const Menu1 = styled.ul`
    display:flex;
    justify-content:space-between;
    align-items:center;
    list-style: none;

    @media (max-width: 64em) {
        /*1024px*/
        position: fixed;
        top: ${props => props.theme.navHeight};
        left:0;
        right: 0;
        bottom: 0%;
        width: 100vw;
        height: ${props => `calc(100vh - ${props.theme.navHeight})`};
        z-index: 50;
        background-color: rgba(255,255,255, 0.85);
        display: flex;
        backdrop-filter: blur(2px);
        gap:5vh;

        transform: ${props => props.click ? 'translateY(0)' : 'translateY(100%)'};
        transition: all 0.3s ease;
        flex-direction: column;
        justify-content: center;
    }
`

const MenuItem1 = styled.li`
    margin:0 1rem;
    color:${props => props.theme.text};
    cursor:pointer;
    margin-top: 1vh;
    font-size: ${props => props.theme.fontlg};
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
const BigMenuItem1 = styled.li`
    margin:0 1rem;
    color:${props => props.theme.body};
    cursor:pointer;
    margin-top: 0.2vh;
    font-size: ${props => props.theme.fontlg};
`

const Btn = styled.button`
    display: inline-block;
    background-color: #272727;
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

    @media (max-width: 64em) {
        /*1024px*/
        font-size: 4vw;
        background-color: ${props => props.theme.orange};
    }
    
`

const HamburgerMenu = styled.span`
    width: ${props => props.click ? "1.5rem" : "1.5rem"};
    height: 2px;
    background: black;

    position: absolute;
    top: 3.5rem;
    left: 90%;
    transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0deg)'};
    display: none;
    justify-content: flex-end;
    align-items: flex-end;

    cursor: pointer;
    transition: all 0.3s ease;

    @media (max-width: 64em) {
        /*1024px*/
        display: flex;
    }
    
    &::after, &::before{
        content: ' ';
        width: ${props => props.click ? "1rem" : "1.5rem"};
        height: 2px;
        right: ${props => props.click ? "-2px" : "0"};
        background: black;
        position: absolute;
        transition: all 0.3s ease;

    }

    &::after{
        top:${props => props.click ? "0.3rem" : "0.5rem"};
        transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0deg)'};
    }
    &::before{
        bottom:${props => props.click ? "0.3rem" : "0.5rem"};
        transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0deg)'};
    }
`

const BtnContainer = styled.div`
    display: flex;

    @media (max-width: 64em) {
        /*1024px*/
        display: none;
    }
`

const Navigation = () => {

    const [click, setClick] = useState(false);

    const ref = useRef(null);
    const [isOpen, setOpen] = useState();
    const [display, setDisplay] = useState('arrow');
    const ref1 = useRef(null);
    const [isOpen1, setOpen1] = useState();
    const [display1, setDisplay1] = useState('arrow');
    const wallet = useWallet();
    function Disconnect() {
        wallet.disconnect();
    }

    const location = useLocation('');

    const scrollTo = (id) => {
        let element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        })
        setClick(!click);
    }

    return (
        <>
            <Section>

                <NavBar>
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                    <HamburgerMenu click={click} onClick={() => setClick(!click)}>
                        &nbsp;
                    </HamburgerMenu>
                    <Menu1 click={click}>
                        <BigMenuItem1>
                            <a href='/' ref={ref} className="btn" onPointerEnter={() => {
                                if (!location.pathname.includes('tools')) {
                                    setOpen(true)
                                }
                            }
                            }> <Btn>
                                    Home
                                </Btn> </a>
                            <ControlledMenu
                                state={isOpen ? 'open' : 'closed'}
                                anchorRef={ref}
                                arrow={true}
                                onPointerLeave={() => setOpen(false)}
                                onClose={() => setOpen(false)}
                                offsetY={display === 'arrow'
                                    ? 15 : 0}
                            >
                                <MenuItem1 onClick={() => scrollTo("about")}>About</MenuItem1>
                                <MenuItem1 onClick={() => scrollTo("whitepaper")}>Whitepaper</MenuItem1>
                                <MenuItem1 onClick={() => scrollTo("team")}>Team</MenuItem1>
                                <MenuItem1 onClick={() => scrollTo("FAQ")}>FAQ</MenuItem1>
                            </ControlledMenu>
                        </BigMenuItem1>
                        <BigMenuItem1><a><Btn>
                            Roadmap
                        </Btn></a></BigMenuItem1>
                        <BigMenuItem1><a><Btn>
                            Whitepaper
                        </Btn></a></BigMenuItem1>
                        <BigMenuItem1><a href='/tools' ref={ref1} className="btn" onPointerEnter={() => {
                            if (location.pathname.includes('tools')) {
                                setOpen1(true)
                            }
                        }}> </a>
                            <ControlledMenu
                                state={isOpen1 ? 'open' : 'closed'}
                                anchorRef={ref1}
                                arrow={true}
                                onPointerLeave={() => setOpen1(false)}
                                onClose={() => setOpen1(false)}
                                offsetY={display1 === 'arrow'
                                    ? 15 : 0}
                            >
                            </ControlledMenu></BigMenuItem1>
                    </Menu1>
                </NavBar>
            </Section>
        </>
    );
};

export default Navigation;