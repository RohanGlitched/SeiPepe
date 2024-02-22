import React from 'react';
import PropTypes from 'prop-types';
import picture from './../../../assets/ToolsAssets/img3.webp'
import { useWallet } from "@suiet/wallet-kit";
import { toast } from 'react-toastify';





import styled from 'styled-components';
import Button from '../../Button';
import ShowObjects from './ShowObjects';


const Section = styled.section`
min-height: 100vh;
width:100vw;
position: relative;
background-color:${props => props.theme.body};
`

const Container = styled.div`
    width:90%;
    min-height: 90vh;
    border-radius: 50px;
    margin: 0 auto; //
    background-color: ${props=>props.theme.black};
    display: flex; // гибкий контейнер
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру

`
const ButtonContainer = styled.div`
    margin-top: 2vh;
    align-self: flex-start;
    margin-left: 10%;

`

const Box = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Box1 = styled.div`
    margin-top: -12vh;
    width:44%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImageContainer = styled.div`
    width: 100%;
    align-self: flex-start;

    img{
        width: 90%;
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
    font-size: 1.25vw;
    text-transform: none;
    color: ${props => props.theme.white};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
    white-space: pre-line;
`

const Input = styled.input`
    width: 70%;
    height: 2vh;
    margin-top: 2vh;
    display: inline-block;
    background-color: white;
    color: black;
    outline: none;
    border: 1px;
    border-color: black;
    align-self: center;
    margin-left: 0%;

    font-size: 1vw;
    padding: 0.9rem 2rem;
    border-radius: 10px;
    cursor:pointer;
    position: relative;

    transition: all 0.2s ease;

`

function Objects() {
    const wallet = useWallet();
    const [objectId, setObjID] = React.useState("");
    const [address, setAddr] = React.useState("");

    const notifySucces = (message) => toast.success(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });
    const notifyError = (message) => toast.error(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });

    const notifyWarning = (message) => toast.warning(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });
    async function transferTxn() {
        if (objectId.length != 42 || address.length != 42) {
            notifyWarning("Incorrect Address or Object Id")
            return;
        }
        try {
            const data = {
                objectId: objectId,
                recipient: address,
                gasBudget: 10000,
            };
            const transferT = await wallet.signAndExecuteTransaction({
                transaction: {
                    kind: 'transferObject',
                    data,
                }
            })
            notifySucces("Transfered")
        } catch (e) {
            console.log(e);
            notifyError("Something Went Wrong")
        }
    };
    return (
        <Section id = "objects">
            <Container>
                <Box>
                    <Title>
                        Sui Objects
                    </Title>
                    <SubText>
                    It is important for us that you understand that every object in SUI is NFT. Therefore, each object has its own unique object ID.
                    {'\n\n'}
                    Even each individual SUI token in an implementation is non-fungible. This approach is found only in the move programming language, on which sui smart contracts are built.
                    {'\n\n'}
                    You can see all the objects that belong to your wallet and better understand how the Sui blockchain works from this side. To do this, use the interface on the right.
                    {'\n\n'}
                    And if you want to send the object to another address, then use the interface below. (P.S you can translate absolutely any object)
                    </SubText>
                    <Input placeholder='Input Object ID' onChange={(e) => setObjID(e.target.value)} />
                    <Input placeholder='Input Address' onChange={(e) => setAddr(e.target.value)} />
                    <ButtonContainer>
                        <Button text = {"Send Object"} funct = {transferTxn}/>
                    </ButtonContainer>
                </Box>
                <Box1>
                    <ImageContainer>
                        <img src={picture} alt='nftText' />
                    </ImageContainer>
                    <ShowObjects/>
                </Box1>
            </Container>
        </Section>
    );
}

export default Objects;