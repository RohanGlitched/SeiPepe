import React from 'react';
import styled from 'styled-components';
import picture from './../../../assets/ToolsAssets/nfttext.webp'
import NftCard from './NftCard';


const Section = styled.div`
    min-height: 100vh;
    width:100%;
    color: ${props => props.theme.body};
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
`
const SectionMint = styled.div`
    min-height: 100vh;
    width:100%;
    color: ${props => props.theme.body};
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    position:relative;
`

const Container = styled.div`
    width:90%;
    min-height: 80vh;
    margin: 0 auto; //
    background-color: white;
    border-radius: 50px;
    display: flex; // гибкий контейнер
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру

`
const NFTContainer = styled.div`
    width:90%;
    min-height: 80vh;
    margin: 0 auto; //
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

const MainTitle = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: #DD6B20;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 0px solid white;
    width: fit-content;

`

function MintNFT() {
    return (
        <>
        <Section id = "mintnft">
            <Container>
                <Box>
                    <Title>
                        Mint Our NFT and test Sui DevNet
                    </Title>
                    <SubText>
                        With this feature, we would like to introduce {'\n'}you to our collection a little.
                        Each nft obtained {'\n'}in this way has three fields:{'\n\n'}
                        Name -  Kittie{'\n'}
                        Image - Link to image{'\n'}
                        Description - Hungry Kitties Test NFT{'\n\n'}
                        We will be updating nft available for mint. Therefore, {'\n'}if you
                        like some kitten - do not delay with his mint.
                    </SubText>
                    <SubTextLight>
                    To implement the mint of our NFTs, we used the open SUI function - mint DevNet NFT, so, in parallel, you are testing the SUI blockchain
                    </SubTextLight>
                </Box>
                <Box>
                    <ImageContainer>
                        <img src={picture} alt='nftText' />
                    </ImageContainer>
                </Box>
            </Container>
        </Section>
        <SectionMint>
            <MainTitle>
                Mint Our NFT
            </MainTitle>
            <NFTContainer>
                <Box>
                    <NftCard text={"Hello everyone, I am a Demon Cat, you can mint the NFT with me and then you will never get into my cat-inferno."} name={"Demon Cat"} link={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmYVcyMvx4J5u7QSqEtL2PJ1NfLGmW4fqgQfBZkM2kpHYv"}/>
                </Box>
                <Box>
                    <NftCard link={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmXuzWsXTxBrVNYRS4DBDCvEBgVCaJmuYX8EEVuN5DkiiV"} name = {"Ace"} text = {"Yo,I'm Ace Cat I eat only the most delicious food, and I dress coolly, I suggest you to mint nft with me to become even cooler."}/>
                </Box>
                <Box>
                    <NftCard link = {"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmfYMkCjh2K4abaqP9UyjbyxA3RtfF4VSgwV8rtYWHFqjL"} name = {"Magic Cat"} text = {"Meeeeew, I am a Magic Cat\nI charge other cats with positive energy.You can mint the nft with me, I hope it will be more fun for you."}/>
                </Box>
            </NFTContainer>
        </SectionMint>
        </>
    );
}

export default MintNFT;