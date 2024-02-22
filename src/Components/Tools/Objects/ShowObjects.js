import React from 'react';
import styled from 'styled-components';
import Button from '../../Button';
import { useEffect} from 'react';
import Drawer from 'react-modern-drawer'
import { toast } from 'react-toastify';
import getObjectsOwnedByAddress from './ObjectsScript.tsx';

import coinLogo from './../../../assets/ToolsAssets/coin.webp'
import nftLogo from './../../../assets/ToolsAssets/nftlogo.webp'
import objectLogo from './../../../assets/ToolsAssets/object.webp'




const DrawerContainer = styled.div`
    width:85%;
    min-height: 100vh;
    margin: 0 auto; //
    display: flex; // гибкий контейнер
    flex-direction: column;
    color: black;
    gap: 3vh;
    justify-content: flex-start; //выравнивание по центру
    align-items: flex-start; // выравнивание по вертикали по центру

`

const DrawerBox = styled.div`
    height: 8vh;
    width: auto;
    display: flex;
    border: 1px solid black;
    border-radius: 50px;
    text{
        color: black;
        font-size: 0.9vw;
        margin-top: 0vh;
        white-space: pre-wrap;
        font-weight: 200;
        margin-left: -1vw;
    }
    htext{
        color: #DD6B20;
    }
`

const ImageContainer = styled.div`
    width: 20vw;

    img{
        width: 100%;
        margin-top: -14vh;
        height: auto;
    }
`

const Title = styled.h2`
    font-size: 3vw;//{//props => props.theme.fontxxl}
    text-transform: capitalize;
    color: black;
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;
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
    margin-bottom: 2vh;
    font-size: 1vw;
    padding: 0.9rem 2rem;
    border-radius: 10px;
    cursor:pointer;
    position: relative;

    transition: all 0.2s ease;
`


function ShowObjects() {
    const notifySucces = (message) => toast.success(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });
    const notifyError = (message) => toast.error(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });

    const notifyWarning = (message) => toast.warning(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });

    const [value, setValue] = React.useState('base');
    const [objects, setObj] = React.useState([]);
    const [k, setK] = React.useState(0)

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    useEffect(() => {
        if (objects.length > 0) {
            toggleDrawer()
        } else {
            if (k != 0) {
                notifyWarning("You dont have objects")
            }
        }
        setK(1);
    }, [objects])
    async function func() {
        if (value.length != 42) {
            notifyWarning("Incorrect Address")
        } else {
            getObjectsOwnedByAddress(value).then(spis => setObj(spis))
        }
        console.log(objects)
    }
    return (
        <>
            <Input placeholder='Input Address, that you want to check' onChange={(e) => setValue(e.target.value)} />
            <Button text={"Show objects"} funct={func} />
            {<Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                size={"45vw"}
                className='bla bla bla'
                lockBackgroundScroll = {true}
            >
                <DrawerContainer>
                    <Title> Objects</Title>
                    {Object.keys(objects).map(element =>
                        <DrawerBox>
                            <ImageContainer>
                                <img src = {objects[element].type.includes('Coin') ? coinLogo : objects[element].type.includes('NFT') ? nftLogo : objectLogo} alt = "logo"/>
                            </ImageContainer>
                            <text>
                                <htext>Object Id</htext> - {'\n'}{objects[element].objectId}{'\n'}
                                <htext>Object Type</htext> - {'\n'}{objects[element].type}
                            </text>

                        </DrawerBox>
                    )}
            </DrawerContainer>
            </Drawer>}
        </>
    );
}

export default ShowObjects;