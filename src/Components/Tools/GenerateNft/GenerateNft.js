import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { RadioGroup, RadioButton} from 'react-radio-buttons';
import { useWallet } from "@suiet/wallet-kit";
import { toast } from 'react-toastify';
import color1 from './../../../assets/ToolsAssets/GenerateAssets/Color/1.webp';
import color2 from './../../../assets/ToolsAssets/GenerateAssets/Color/2.webp';
import color3 from './../../../assets/ToolsAssets/GenerateAssets/Color/3.webp';
import eye1 from './../../../assets/ToolsAssets/GenerateAssets/Eyes/1.webp';
import eye2 from './../../../assets/ToolsAssets/GenerateAssets/Eyes/2.webp';
import eye3 from './../../../assets/ToolsAssets/GenerateAssets/Eyes/3.webp';
import food1 from './../../../assets/ToolsAssets/GenerateAssets/Food/1.webp';
import food2 from './../../../assets/ToolsAssets/GenerateAssets/Food/2.webp';
import food3 from './../../../assets/ToolsAssets/GenerateAssets/Food/3.webp';
import hat1 from './../../../assets/ToolsAssets/GenerateAssets/Hats/1.webp';
import hat2 from './../../../assets/ToolsAssets/GenerateAssets/Hats/2.webp';
import hat3 from './../../../assets/ToolsAssets/GenerateAssets/Hats/3.webp';
import mouth1 from './../../../assets/ToolsAssets/GenerateAssets/Mouth/1.webp';
import mouth2 from './../../../assets/ToolsAssets/GenerateAssets/Mouth/2.webp';
import mouth3 from './../../../assets/ToolsAssets/GenerateAssets/Mouth/3.webp';
import Button from '../../Button';



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
    background-color: white;
    border-radius: 40px;
    overflow: visible;
    display: flex; // гибкий контейнер
    gap: 10vw;
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
        width:100%;
        border-radius: 50px;
        height:auto;
    }
`

const Title = styled.h2`
    font-size: 3vw;//{//props => props.theme.fontxxl}
    text-transform: capitalize;
    color: ${props => props.theme.body};
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;
`

const SubText = styled.p`
    font-size: 1.5vw;
    text-transform: lowercase;
    color: ${props => props.theme.body};
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
    color: ${props => props => props.theme.body};
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
const RadioB = styled(RadioButton)`
    background-color: black;
    border-radius: 20px;
`

const STabs = styled(Tabs)`
  font-size: 1.25vw;
  width: 40vw;
`;

const STabList = styled(TabList)`
  list-style-type: none;
  display: flex;
  gap: 0.7vw;
  border-bottom: 0px solid black;
  padding: 1vh;
  display: flex;
  margin: 0;
`;
STabList.tabsRole = 'TabList';

const STab = styled(Tab)`
  margin-right: 1vw;
  max-height: 2vh;
  min-width: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vw;
  opacity: 0.8;
  user-select: none;
  cursor: arrow;
  border-radius: 20px;
  background-color: black;
  transition: all 0.2s ease;

    color: white;
  &.is-selected {
    color: white;
    background: #DD6B20;
  }

  &:focus {
    outline: none;
  }
  :hover{
    transform: scale(1.05);
  }
`;
STab.tabsRole = 'Tab';

const STabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  border: 0px solid black;
  padding: 4px;
  margin-top: 1vh;

  &.is-selected {
    display: block;
  }
`;

const ImagesContainer = styled.div`
    margin-top: 4vh;
    margin-bottom: 4vh;
    width:100%;
    display: flex;
    gap: 2vw;
    img{
        width: 30%;
        border-radius: 20px;
        height: auto;
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
    border-bottom: 0px solid white;
    width: fit-content;

`


function GenerateNft() {
    const [select, setSelect] = useState("optionA");

    const handleSelectChange = event => {
        const value = event.target.value;
        setSelect(value);
    };
    const wallet = useWallet();
    const pathfile = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVS86ispo2Qp98pAZcBJkYCGSDTRQxTVHzQDc5p67uKvN/"
    const [eyes, setEyes] = React.useState('1')
    const [hats, setHats] = React.useState('1')
    const [color, setColor] = React.useState('1')
    const [food, setFood] = React.useState('1')
    const [mouth, setMouth] = React.useState('1')
    const notifySucces = (message) => toast.success(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });
    const notifyError = (message) => toast.error(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });
    const notifyWarning = (message) => toast.warning(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });
    
    const [path, setPath] = React.useState(pathfile + color + eyes + food + hats + mouth + ".png")
    useEffect(() => {
        setPath(pathfile + color + eyes + food + hats + mouth + ".png")
    }, [eyes, hats, color, food, mouth, path])

    async function handleExecuteMintNft() {
        try {
            const data = {
                packageObjectId: '0x2',
                module: 'devnet_nft',
                function: 'mint',
                typeArguments: [],
                arguments: [
                    'Kittie',
                    'Nft Created with Hungry Kitties Tool',
                    path,
                ],
                gasBudget: 100000,
            };
            const resData = await wallet.signAndExecuteTransaction({
                transaction: {
                    kind: 'moveCall',
                    data
                }
            });
            return (
                notifySucces("Succes Mint")
            )
        } catch (e) {
            console.log(e)
            return (
                notifyWarning("An error occurred during the execution of the transaction, check the correct execution manually")
            )
        }
    }

    return (
        <Section id = "GenerateNFT">
            <MainTitle>
                Generate NFT With Our Assets
            </MainTitle>
            <Container>
                    <Box>
                        <STabs
                            selectedTabClassName='is-selected'
                            selectedTabPanelClassName='is-selected'
                        >
                            <STabList>
                                <STab>Color</STab>
                                <STab>Eyes</STab>
                                <STab>Food</STab>
                                <STab> Hats </STab>
                                <STab>Mouth</STab>
                            </STabList>
                            <STabPanel>
                                <ImagesContainer>
                                    <img src = {color1}/>
                                    <img src = {color2}/>
                                    <img src = {color3}/>
                                </ImagesContainer>
                                <RadioGroup pointColor = "#DD6B20" horizontal onChange = {setColor}>
                                    <RadioButton pointColor = "#DD6B20" value="1">
                                        Bengal Cat
                                    </RadioButton>
                                    <RadioButton pointColor = "#DD6B20" value="2">
                                        White Cat
                                    </RadioButton>
                                    <RadioButton pointColor = "#DD6B20" value="3">
                                        Beige Cat
                                    </RadioButton>
                                </RadioGroup>
                            </STabPanel>
                            <STabPanel><ImagesContainer>
                                    <img src = {eye1}/>
                                    <img src = {eye2}/>
                                    <img src = {eye3}/>
                                </ImagesContainer>
                                <RadioGroup pointColor = "#DD6B20" horizontal onChange = {setEyes}>
                                    <RadioButton pointColor = "#DD6B20" value="1">
                                        Squinted eyes
                                    </RadioButton>
                                    <RadioButton pointColor = "#DD6B20" value="2">
                                        Spiral eyes
                                    </RadioButton>
                                    <RadioButton pointColor = "#DD6B20" value="3">
                                        Cute eyes
                                    </RadioButton>
                                </RadioGroup></STabPanel>
                            <STabPanel><ImagesContainer>
                                    <img src = {food1}/>
                                    <img src = {food2}/>
                                    <img src = {food3}/>
                                </ImagesContainer>
                                <RadioGroup pointColor = "#DD6B20" horizontal onChange = {setFood}>
                                    <RadioButton pointColor = "#DD6B20" value="1">
                                        Ice cream
                                    </RadioButton>
                                    <RadioButton pointColor = "#DD6B20" value="2">
                                        Chocolate bar
                                    </RadioButton>
                                    <RadioButton pointColor = "#DD6B20" value="3">
                                        Burrito
                                    </RadioButton>
                                </RadioGroup></STabPanel>
                            <STabPanel><ImagesContainer>
                                    <img src = {hat1}/>
                                    <img src = {hat2}/>
                                    <img src = {hat3}/>
                                </ImagesContainer>
                                <RadioGroup pointColor = "#DD6B20" horizontal onChange = {setHats}>
                                    <RadioButton pointColor = "#DD6B20" value="1">
                                        Bear hat
                                    </RadioButton>
                                    <RadioButton pointColor = "#DD6B20" value="2">
                                        Hungry cap
                                    </RadioButton>
                                    <RadioButton pointColor = "#DD6B20" value="3">
                                        Bow
                                    </RadioButton>
                                </RadioGroup></STabPanel>
                            <STabPanel><ImagesContainer>
                                    <img src = {mouth1}/>
                                    <img src = {mouth2}/>
                                    <img src = {mouth3}/>
                                </ImagesContainer>
                                <RadioGroup pointColor = "#DD6B20" horizontal onChange = {setMouth}>
                                    <RadioButton pointColor = "#DD6B20" value="1">
                                        Mouth 1
                                    </RadioButton>
                                    <RadioButton pointColor = "#DD6B20" value="2">
                                        Mouth 2
                                    </RadioButton>
                                    <RadioButton pointColor = "#DD6B20" value="3">
                                        Mouth 3
                                    </RadioButton>
                                </RadioGroup></STabPanel>
                                <Button text = "Mint" funct={handleExecuteMintNft}/>
                        </STabs>
                    </Box>
                <Box>
                    <VideoContainer>
                        <img src = {path}/>
                    </VideoContainer>
                </Box>
            </Container>
        </Section>
    );
}

export default GenerateNft;