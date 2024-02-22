import React from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation';
import MainPhonePage from './MainPagePhone';
import NavBar from './NavBar';
import Paralax1 from './Parallax';
import Phase12 from './Phase12';
import Phase56 from './Phase56';
import Phase34 from './Section34';

const MainPhone = styled.div`
    display: none;
    @media (max-width: 64em) {
        display: flex;
        flex-direction: column;
        gap: 0vh;
    }
`
const BigSpace = styled.section`
margin-top: -2vh;
height: 30vh;
width:100vw;
position: relative;
display: flex;
align-items: center;
justify-content: center;
background-image: url("https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmYD5T74cbos7pXt5imrnnnDvZ3H8vwRgkUjvVcV5pivAT/IMG_5229.PNG");
background-size: 100%;
`

const Section = styled.section`
min-height: 100vh;
width:100vw;

position: relative;
background-color: #C4F1F9;
@media (max-width: 64em) {
        display: none;

    }
`
const Section1 = styled.section`
min-height: 100vh;
width:100vw;
position: relative;
display: flex;
align-items: center;
justify-content: center;
background-image: url("https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmYD5T74cbos7pXt5imrnnnDvZ3H8vwRgkUjvVcV5pivAT/IMG_5229.PNG");
background-size: 100%;
@media (max-width: 64em) {
        display: none;

}
`
const Container = styled.div`
    width:85%;
    min-height: 60vh;
    margin: 0vw auto; //
    background-color: ${props => props.theme.body};
    overflow: visible;
    display: flex; // гибкий контейнер
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру

    @media (max-width: 64em) {
        width: 85%;
    }
    @media (max-width: 48em) {
        width: 85%;
        flex-direction: column-reverse;
    }

`

const Box = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 70em) {
        height: 30vh;
        width: 70vw;
        &>*:first-child{
            margin-top: 20vh;
        }
    }
    img{
        width: 100%;
        height: auto;
    }

`
const Btn = styled.button`
    display: inline-block;
    background-color: ${props => props.theme.orange};
    color: ${props => props => props.theme.white};
    outline: none;
    border: none;
    white-space: nowrap;
    font-size: ${props => props.theme.fontxl};
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
        font-size: 2vw;
        :hover{
            transform: none;
        }
    }
`

function Roadmap() {
    return (
        <>
            <Section>
                <NavBar />
                <Paralax1 />
            </Section>
            {/*<Section1>
                <a href="/">
                    <Btn>
                        To Home Page
                    </Btn>
                </a>
    </Section1>*/}
            <MainPhone>
                <MainPhonePage />
                <Phase12 />
                <Phase34 />
                <Phase56 />
                {/*
                <BigSpace>
                    <a href="/">
                        <Btn>
                            To Home Page
                        </Btn>
                    </a>
</BigSpace>*/}
            </MainPhone>
        </>
    );
}

export default Roadmap;