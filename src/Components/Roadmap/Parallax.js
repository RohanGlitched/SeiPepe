import React from 'react';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styled from 'styled-components';
import NavBar from './NavBar';

const Section = styled.section`
min-height: 100vh;
width:100vw;

position: relative;
//background-image: url("https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmdD2PSpBhQbR1LSgGtCj3HG9vuAg4XJFRaL3GxDFTbZpS");
background-size: 100vw auto;
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

function Paralax() {
    return (
        <Parallax pages={2} style={{ backgroundColor: "black" }}>
            <ParallaxLayer offset={0} factor={1} speed={0} style={{ opacity: 1, backgroundColor: "#C4F1F9" }}>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
                <Box>
                    <img
                        alt="cloud1"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWFRSFfs4eE2HB8ybYTBtUZBjZxya4qyja6nA71MrbwhD/img-5276.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.5}>
                <Box>
                    <img
                        alt="cloud1"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWFRSFfs4eE2HB8ybYTBtUZBjZxya4qyja6nA71MrbwhD/IMG_5277.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
                <Box>
                    <img
                        alt="big Mountains"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWFRSFfs4eE2HB8ybYTBtUZBjZxya4qyja6nA71MrbwhD/img-5278.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
                <Box>
                    <img
                        alt="christmas Tree"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWFRSFfs4eE2HB8ybYTBtUZBjZxya4qyja6nA71MrbwhD/img-5279.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
                <Box>
                    <img
                        alt="left trees"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWFRSFfs4eE2HB8ybYTBtUZBjZxya4qyja6nA71MrbwhD/img-5280.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
                <Box>
                    <img
                        alt="left back heel"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWFRSFfs4eE2HB8ybYTBtUZBjZxya4qyja6nA71MrbwhD/IMG_5281.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1.1}>
                <Box>
                    <img
                        alt="mid heel"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWFRSFfs4eE2HB8ybYTBtUZBjZxya4qyja6nA71MrbwhD/IMG_5282.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
                <Box>
                    <img
                        alt="front heel"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWFRSFfs4eE2HB8ybYTBtUZBjZxya4qyja6nA71MrbwhD/IMG_5284.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1.25}>
                <Box>
                    <img
                        alt="christmas Tree"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWFRSFfs4eE2HB8ybYTBtUZBjZxya4qyja6nA71MrbwhD/IMG_5291.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1.45}>
                <Box>
                    <img
                        alt="christmas Tree"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWFRSFfs4eE2HB8ybYTBtUZBjZxya4qyja6nA71MrbwhD/IMG_5293.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1.1} style={{ opacity: 1, backgroundColor: "#63B3ED" }}>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1.5} style = {{marginTop: "30vh"}}>
                <Box>
                    <img
                        alt="sky"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmX89EBUt1oz3ipdok4zCQevmUBDiGpewBnfVyzAkZQUJG"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1.1}>
                <Box>
                    <img
                        alt="sun"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWLgpbS4637GkybXLXP7V9Abc6fH34yQU8z4khn1Sfdiu"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={0.9}>
                <Box>
                    <img
                        alt="right big pyramid"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVc3eutDwdgsJr7wav8vKRpYfzXqsSwFbZep488cTApX5/img-5313.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={0.9}>
                <Box>
                    <img
                        alt="middle big pyramid"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVc3eutDwdgsJr7wav8vKRpYfzXqsSwFbZep488cTApX5/img-5314.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={0.9}>
                <Box>
                    <img
                        alt="three pyramids"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVc3eutDwdgsJr7wav8vKRpYfzXqsSwFbZep488cTApX5/img-5315.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1}>
                <Box>
                    <img
                        alt="big sand"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVc3eutDwdgsJr7wav8vKRpYfzXqsSwFbZep488cTApX5/img-5316.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1}>
                <Box>
                    <img
                        alt="low sand"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVc3eutDwdgsJr7wav8vKRpYfzXqsSwFbZep488cTApX5/img-5317.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed = {1}>
                <Box>
                    <img
                        alt="left"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVc3eutDwdgsJr7wav8vKRpYfzXqsSwFbZep488cTApX5/img-5325.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed = {1}>
                <Box>
                    <img
                        alt="right"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVc3eutDwdgsJr7wav8vKRpYfzXqsSwFbZep488cTApX5/img-5326.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1}>
                <Box>
                    <img src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmZdZvGJ6aUCKZUje55JXSDcGsLWXw4XYK8kz3LRKJWu1P/img-5343.webp" />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={5}>
                <Box>
                    <img src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmZdZvGJ6aUCKZUje55JXSDcGsLWXw4XYK8kz3LRKJWu1P/img-5230.webp" />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1}>
                <Box>
                    <img src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmZdZvGJ6aUCKZUje55JXSDcGsLWXw4XYK8kz3LRKJWu1P/img-5373.webp" />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={4}>
                <Box>
                    <img src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmZdZvGJ6aUCKZUje55JXSDcGsLWXw4XYK8kz3LRKJWu1P/img-5234.webp" />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={2.2}>
                <Box>
                    <img src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmZdZvGJ6aUCKZUje55JXSDcGsLWXw4XYK8kz3LRKJWu1P/img-5233.webp" />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1}>
                <Box>
                    <img src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmZdZvGJ6aUCKZUje55JXSDcGsLWXw4XYK8kz3LRKJWu1P/img-5372.webp" />
                </Box>
            </ParallaxLayer>
        </Parallax >
    );
}

export default Paralax;