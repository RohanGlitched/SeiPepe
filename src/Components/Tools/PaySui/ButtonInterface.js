import React from 'react';
import { useAccountBalance, useWallet } from "@suiet/wallet-kit";
import { JsonRpcProvider, Network } from '@mysten/sui.js';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import NumericInput from 'react-numeric-input';
import '../../../Styles/index.less'
import { hover } from '@testing-library/user-event/dist/hover';
import Button from '../../Button';
import Drawer from 'react-modern-drawer'
import { toast } from 'react-toastify';


//import styles 👇
import 'react-modern-drawer/dist/index.css'
import Arrow from '../../../Icons/Arrow';




const Container = styled.div`
    width:85%;
    min-height: 80vh;
    margin: 0 auto; //
    gap: 1vh;
    display: flex; // гибкий контейнер
    border-radius: 50px;
    flex-direction: column;
    gap:2vh;
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру

`
const DrawerContainer = styled.div`
    width:90%;
    min-height: 100vh;
    margin: 0 auto; //
    gap: 1vh;
    display: flex; // гибкий контейнер
    flex-direction: column;
    gap: 5vh;
    justify-content: flex-start; //выравнивание по центру
    align-items: flex-start; // выравнивание по вертикали по центру

`

const Box = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ButtonsContainer = styled.div`
    width:80%;
    height:100%;
    display:flex;
    justify-content: flex-start;
    gap: 2vw;
    align-items: flex-start;
    align-self: center;
`

const ButtonsContainer2 = styled.div`
    width:80%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1vh;
    align-items: flex-start;
    align-self: center;
`
const InputContainer = styled.div`
    width:80%;
    height:100%;
    display:flex;
    gap: 1vw;
    justify-content: center;
    align-items: center;
    align-self: center;

    .numinp{
        width: 10%;
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

    font-size: 1vw;
    padding: 0.9rem 3.5rem;
    border-radius: 10px;
    cursor:pointer;
    position: relative;

    transition: all 0.2s ease;


    &:hover{
        transform: scale(1.05);
    }
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
const Title1 = styled.h2`
    font-size: 1.5vw;//{//props => props.theme.fontxxl}
    text-transform: capitalize;
    color: black;
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;
`

const SubText = styled.p`
    font-size: 1vw;
    text-transform: lowercase;
    color: ${props => props.theme.white};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
    white-space: nowrap;
`

const Input = styled.input`
    width: 80%;
    height: 1.25vh;
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

    font-size: 1vw;
    padding: 0.9rem 1.5rem;
    border-radius: 10px;
    cursor:pointer;
    position: relative;

    transition: all 0.2s ease;

`

const Btn1 = styled.button`
    width: 10vw;
    height: 5vh;
    display: inline-block;
    background-color: gray;
    color: ${props => props => props.theme.white};
    outline: none;
    border: none;
    white-space: nowrap;
    font-size: ${props => props.theme.fontlg};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.9rem 2.5rem;
    border-radius: 10px;
    cursor:pointer;
    position: relative;

    transition: all 0.2s ease;


    &:hover{
        transform: scale(0.95);
    }
`

const Btn2 = styled.button`
    width: 31vw;
    display: inline-block;
    background-color: #DD6B20;
    color: ${props => props => props.theme.white};
    outline: none;
    border: none;
    white-space: nowrap;
    font-size: ${props => props.theme.fontlg};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.9rem 2.5rem;
    border-radius: 10px;
    cursor:pointer;
    position: relative;

    transition: all 0.2s ease;


    &:hover{
        transform: scale(0.95);
    }
`

const InputName = styled.input`
    align-self: flex-start;
    margin-left: 4vw;
    width: 26vw;
    height: 2vh;
    display: inline-block;
    background-color: white;
    color: black;
    outline: none;
    border: 1px;
    border-color: black;

    font-size: 1vw;
    padding: 0.9rem 1.5rem;
    border-radius: 10px;
    cursor:pointer;
    position: relative;
    margin-top: -1.75vh;

    transition: all 0.2s ease;

`

const DrawerBox = styled.div`
    height: 15vh;
    width: auto;
    display: flex;
    flex-direction: column;

    textTitle{
        color: #DD6B20;
        font-size: ${props=>props.theme.fontxl};
    }

`


function ButtonInterface() {

    const notifySucces = (message) => toast.success(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });
    const notifyError = (message) => toast.error(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });

    const notifyWarning = (message) => toast.warning(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });

    const wallet = useWallet();
    const divider = 1000000000;
    const provider = new JsonRpcProvider(Network.DEVNET);
    const { balance } = useAccountBalance();
    const [coinsArray, setObj] = React.useState([]);
    const [addressArray, setAddr] = React.useState([]);
    const [addressMap, setAddrMap] = React.useState(new Map())
    const [namesMap, setNamesApp] = React.useState(new Map())
    const [numbersArray, setNum] = React.useState([]);
    const [addr, setAddress] = React.useState('');
    const [number, setNumber] = React.useState(0);
    const [name, setName] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    function sum() {
        var summa = 0;
        Object.keys(addressMap).forEach(element => summa += addressMap[element])
        return summa;
    }
    function addNew() {
        if (addr.length == 42 && number > 0) {
            if (Object.keys(addressMap).some(x => x == addr)) {
                var testAddrMap = addressMap;
                testAddrMap[addr] += (number * divider);
                setAddrMap(testAddrMap);
            } else {
                var testAddrMap = addressMap;
                testAddrMap[addr] = number * divider;
                setAddrMap(testAddrMap);
            }
            if (Object.keys(namesMap).some(x => x == addr)) {
                if (name != '' && name != namesMap[addr]) {
                    var testAddrMap = namesMap;
                    testAddrMap[addr] = (name);
                    setNamesApp(testAddrMap);
                    notifyWarning("You change a name of this address")
                }
            } else {
                var testAddrMap = namesMap;
                testAddrMap[addr] = name;
                setNamesApp(testAddrMap);
            }
            notifySucces("Added")
        } else {
            notifyError("Incorrect addres or number")
        }
    }
    async function GetCoinsByAddress() {
        try {
            const temp = provider.getObjectsOwnedByAddress(wallet.address);
            var ct = [];
            temp.then(spis => {
                spis.forEach((x) => {
                    if (x.type === "0x2::coin::Coin<0x2::sui::SUI>") {
                        ct.push(x.objectId)
                    }
                })
            })
            setObj(ct)
        } catch (e) {
            console.log(e);
        }
    }
    async function GetAddresses() {
        setAddr(addressMap.keys());
        var nums = new Array();
        addressArray.forEach(element => nums.push(element));
        setNum(nums);
    }
    async function handleExecutePaySui() {
        if (sum() >= balance) {
            notifyError("Insufficient funds");
            return;
        }
        try {
            GetCoinsByAddress();
            var addr = new Array();
            var nums = new Array();
            Object.keys(addressMap).forEach(element => {

                addr.push(element);
                nums.push(addressMap[element])
            });
            setAddr(addr);
            setNum(nums);
            console.log(addressArray);
            console.log(numbersArray);
            const data = {
                inputCoins: coinsArray,
                recipients: addressArray,
                amounts: numbersArray,
                gasBudget: 20000,
            };
            const resData = await wallet.signAndExecuteTransaction({
                transaction: {
                    kind: 'paySui',
                    data
                }
            });
            // const resData = await executeMoveCall(data);
            notifySucces("Distributed");
            console.log('executeMoveCall success', resData);
        } catch (e) {
            console.error('executeMoveCall failed', e);
            notifyError('Transaction failed');
        }
    }
    return (
        <Container>
            <Title>
                You Can try Pay Sui
            </Title>
            <SubText>
                Feel Forms--Add transaction to pool--Show added transactions--Send Sui
            </SubText>
            <InputContainer>
                <Input onChange={(e) => setAddress(e.target.value)} placeholder='Input Addres' />
                <NumericInput step={0.01} precision={3} min={0} max={100} style={{
                    input: {
                        width: '10vw',
                        height: '4vh',
                        fontSize: '1vw',
                        backgroundColor: 'white',
                        border: '0px',
                    }
                }} onChange={(e) => setNumber(Number(e))} />
            </InputContainer>

            <InputName onChange={(e) => setName(e.target.value)} placeholder='Give a Name to Address(Optional)' />

            <ButtonsContainer>
                <Btn1 onClick={addNew}>
                    Add Transaction
                </Btn1>
                <Btn1 onClick={(e) => {
                    setAddrMap(new Map())
                    setNamesApp(new Map())
                    notifySucces('Cleared')
                }}> Clear All </Btn1>
            </ButtonsContainer>
            <ButtonsContainer2>
                <Btn2 onClick={toggleDrawer}> Show Added Transactions </Btn2>
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='right'
                    size={500}
                    className='bla bla bla'
                >
                    <div>
                        <DrawerContainer>
                            <Title1>
                                You want to distribute: {sum() / divider} SUI
                            </Title1>
                            {Object.keys(addressMap).map(u =>
                                <DrawerBox>
                                    <textTitle>
                                        Transaction
                                    </textTitle>
                                    <p>
                                        {addressMap[u] / divider} SUI {namesMap[u] != '' ? "to " + namesMap[u] : ''}
                                    </p>
                                    <p>
                                        {u}
                                    </p>
                                </DrawerBox>
                            )}
                        </DrawerContainer>
                    </div>
                </Drawer>
                <Btn2 onClick={handleExecutePaySui}> Send Sui </Btn2>
            </ButtonsContainer2 >
        </Container >
    );
}
export default ButtonInterface;