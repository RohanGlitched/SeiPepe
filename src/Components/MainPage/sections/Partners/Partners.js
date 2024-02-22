import React from 'react';
import styled, { keyframes } from 'styled-components';
import PartnerCard from './PartnerCard';

const Section = styled.section`
    margin-top: 5vh;
    min-height: 90vh;
    width:90%;
    margin-left: 5vw;
    color: ${props => props.theme.body};
    border: 0vh solid rgba(0, 0, 0, 0.9);
    border-radius: 50px;
    background-color: #272727;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: 64em) {
        display: none;
        min-height: 0vh;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: black;
        height: 80vh;
    }
`

const Row = styled.div`
    width: 90vw;
    height: 50vh;
    margin-top: -7vh;
    white-space: nowrap;
    box-sizing: content-box;
    gap: 10vw;
    justify-content: center;
    display: flex;
    @media (max-width: 64em) {
        flex-direction: column;
    }
`

const MainTitle = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 2px solid ${props => props.theme.black};
    width: fit-content;
        @media (max-width: 64em) {
            display: none;
        }

`

function Partners() {
    return (
        <>
        <MainTitle>
                Partners
        </MainTitle>
        <Section id = "partners">
            <Row>
                <PartnerCard image = {"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmaCkpyPUAWKb8BdY45nPbNkK46JJMrfVBbzvceAKomWP3/img-5111.webp"} text = "Sui Daily" link={"https://twitter.com/suidailytk?s=21&t=tBpyDIymP_JNa35htS5GXA"}/>
                <PartnerCard image = {"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmaCkpyPUAWKb8BdY45nPbNkK46JJMrfVBbzvceAKomWP3/img-5112.webp"} text = "Sui Ecosystem" link={"https://twitter.com/suiecosystem?s=21&t=tBpyDIymP_JNa35htS5GXA"}/>
                <PartnerCard image={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmaCkpyPUAWKb8BdY45nPbNkK46JJMrfVBbzvceAKomWP3/img-5109.webp"} text = "Suiet Wallet" link={"https://twitter.com/suiet_wallet?s=21&t=tBpyDIymP_JNa35htS5GXA"}/>
            </Row>
            <Row>
                <PartnerCard image={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmaCkpyPUAWKb8BdY45nPbNkK46JJMrfVBbzvceAKomWP3/img-5113.webp"} text = "Ethos Wallet" link={"https://twitter.com/ethoswalletxyz?s=21&t=tBpyDIymP_JNa35htS5GXA"}/>
                <PartnerCard image={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmaCkpyPUAWKb8BdY45nPbNkK46JJMrfVBbzvceAKomWP3/img-5115.webp"} text = "Keepsake" link={"https://twitter.com/keepsakemarket?s=21&t=tBpyDIymP_JNa35htS5GXA"}/>
                <PartnerCard image={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmaCkpyPUAWKb8BdY45nPbNkK46JJMrfVBbzvceAKomWP3/img-5345.webp"} text = "Sui Global" link = "https://suiglobal.com/"/>
            </Row>
        </Section>
        </>
    );
}

export default Partners;