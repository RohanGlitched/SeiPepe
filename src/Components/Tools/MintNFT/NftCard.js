import React from 'react';
import styled from 'styled-components';
import Button from '../../Button';
import { toast } from 'react-toastify';
import { useWallet } from "@suiet/wallet-kit";




const Container = styled.div`
    width:85%;
    min-height: 75vh;
    margin: 0 auto; //
    border-radius: 50px;
    border-color: black;
    box-shadow: 0.1vw 1px 10px black;
    display: flex; // гибкий контейнер
    flex-direction: column;
    gap:2vh;
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру

    position: relative;

    transition: all 0.5s ease;

    :hover{
        transform:scale(1.05);
    }

`

const Box = styled.div`
    width:50%;
    height:100%;
    background-color: red;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ButtonBox = styled.div`
    margin: 1rem auto;
`

const ImageContainer = styled.div`
    width: 90%;
    margin-top: 2vh;
    img{
        width: 100%;
        height: auto;
        border-radius: 50px;
    }
`
const Title = styled.h2`
    font-size: 1.5vw;//{//props => props.theme.fontxxl}
    text-transform: capitalize;
    color: ${props => props.theme.text};
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const SubText = styled.p`
    font-size: 1.25vw;
    text-transform: none;
    color: ${props => props.theme.text};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 600;
    white-space: pre-line;
`

const Input = styled.input`
    width: 50%;
    margin-top: 2vh;
    margin-bottom: 2vh;
    display: inline-block;
    background-color: white;
    color: black;
    outline: none;
    border: 1px;
    border-color: black;
    align-self: center;
    margin-left: 0%;
    border: 1px solid black;
    font-size: 1vw;
    padding: 0.9rem 3.5rem;
    border-radius: 10px;
    cursor:pointer;
    position: relative;

    transition: all 0.2s ease;


`

function NftCard({ name, text, link }) {
    const wallet = useWallet();

    const [value, setValue] = React.useState("Hungry Kitties NFT");

    const notifySucces = (message) => toast.success(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });
    const notifyError = (message) => toast.error(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });
    const notifyWarning = (message) => toast.warning(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });

    async function handleExecuteMintNft() {
        try {
            const data = {
                packageObjectId: '0x2',
                module: 'devnet_nft',
                function: 'mint',
                typeArguments: [],
                arguments: [
                    value,
                    'Nft Created with Hungry Kitties Tool',
                    link,
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
                notifySucces("You mint your NFT")
            )
        } catch (e) {
            console.log(e);
            return (
                notifyWarning("An error occurred during the execution of the transaction, check the correct execution manually")
            )
        }
    }
    
    return (
        <Container>
            <ImageContainer>
                <img src={link} alt='nft1' />
            </ImageContainer>
            <Title>
                {name}
            </Title>
            <SubText>
                {text}
            </SubText>
            <Input onChange={(e) => setValue(e.target.value)} placeholder = 'Give a Name to your cat'/>
            <ButtonBox>
                <Button text={"Mint"} funct = {handleExecuteMintNft}/>
            </ButtonBox>
        </Container>
    );
}

export default NftCard;