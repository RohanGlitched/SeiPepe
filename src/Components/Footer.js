import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Banner from './Banner';
import Facebook from './../Icons/Facebook'
import Twitter from './../Icons/Twitter'
import Whitepaper from '../Icons/Whitepaper';
import { useHistory, useLocation, useParams } from "react-router";
import { useRef, useState } from 'react';



const Section = styled.div`
    min-height: 70vh;
    min-width: 100vw;
    background-color: ${props => props.theme.body};
    position: relative;
    display: flex;
    //justify-content: center;
    //align-items: center;
    flex-direction: column;
`

const Container = styled.div`
    width:85vw;
    height: 25vh;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.text};
    @media (max-width: 64em) {
        flex-direction: column;
        gap:5vw;
    }
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const IconsList = styled.div`
    display: flex;
    align-items: center;
    gap: 2vw;
    margin: 1rem auto;
    @media (max-width: 64em) {
        gap:5vw;
        justify-content: center;
        align-items: center;
    }
`

const MenuItems = styled.ul`
    list-style: none;
    width: 50%;
    margin-bottom: 1vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1rem;
    @media (max-width: 64em) {
        justify-content: center;
        grid-column-gap: 30vw;
        margin-bottom: 5vh;
    }
`

const Item = styled.li`
    width: fit-content;
    cursor: pointer;
    font-size: 1vw;

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

    @media (max-width: 64em) {
        font-size: 2vw;
    }

`
const ImageContainer = styled.div`
    width: 100%;
    height: 100%;

    img{
        width: 100%;
        height: auto;
    }
`
const Bottom = styled.div`
    width: 90%;
    margin: 1vh auto;
    margin-bottom: 5vh;
    display: flex;
    justify-content: space-between;
    font-size: 1vw;
    align-items: center;

`
const Btn = styled.button`
    display: flex;
    background-color: ${props => props.theme.black};
    color: ${props => props => props.theme.white};
    outline: none;
    border: none;
    white-space: nowrap;
    font-size: ${props => props.theme.fontlg};
    justify-content: center;
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
        max-width: 5vw;
        font-size: 2vw;
        :hover{
            transform: none;
        }
    }
`


function Footer() {
    const location = useLocation('');
    const [click, setClick] = useState(false);

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
        <Section>
            <Container>
                <Left>
                    <IconsList>
                        <a href="https://twitter.com/SEI_PEPENFT">
                            <Btn>
                                Twitter
                            </Btn>
                        </a>
                        <a href="https://discord.gg/vamyWyH8">
                            <Btn>
                                Discord
                            </Btn>
                        </a>
                    </IconsList>
                </Left>
                <MenuItems>
                    <Item>
                        <a href = "/">
                            Home
                        </a>
                    </Item>
                    <Item onClick={() => scrollTo("tools")}>
                    </Item>
                    <Item> <a href='/roadmap'>Roadmap</a></Item>
                </MenuItems>
            </Container>
            <Bottom>
                <span>
                    &copy; 2024 SEI PEPE. All rights reserved.
                </span>
            </Bottom>
        </Section>
    );
}

export default Footer;