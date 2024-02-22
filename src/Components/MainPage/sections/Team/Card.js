import React from 'react';
import styled from 'styled-components';



const Item = styled.div`
    width:16vw;
    height: 40vh;
    padding: 0vh 0vw;
    margin: 0vh 0vw;
    position: relative;
    justify-content: center;
    border: 7px solid rgba(0, 0, 0, 1);
    border-radius: 50px;
    display: flex;
    background-color: rgba(39, 39, 39, 1);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    @media (max-width: 64em) {
        width: 40vw;
        height: 30vh;
        margin: 0;
    }
    :hover{
        transform: scale(1.05);
    }
`
const ImageContainer = styled.div`
    width: 80%;
    height: 100%;
    margin: 1vh 0vw;
    color: ${props => props.theme.body};
    border-radius: 40px;
    cursor: pointer;
    transition: all 0.5s ease;
    overflow: hidden;
    @media (max-width: 64em) {
        width: 100%;
        height: 20vh;
        margin: 0;
        border: 0px solid #DD6B20;
    }

    :hover img{
        //transform: scale(1.2);
    }
    :hover {
        //border: 0px;
    }
    img{
        width:100%;
        height: auto;
        border-radius: 20px;
        transition: all 0.5s ease;
        @media (max-width: 64em) {
            width: 100%;
            height: auto;
            align-self: center;
    }
    }

`

const Name = styled.h2`
    font-size: ${props => props.theme.fontlg};
    display:flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: ${props=>props.theme.white};
    margin: 1rem;
    @media (max-width: 64em) {
        font-size: 4vw;
        align-self: center;
        text-align: center;
        color: white;
    }
`
const Position = styled.h2`
    font-size: ${props => props.theme.fontlg};
    display:flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    text-align: center;
    color: ${props=>props.theme.white};
    opacity: 0.8;
    margin: 1rem;
    font-weight: 800;
    @media (max-width: 64em) {
        font-size: 3vw;
        align-self: center;
        text-align: center;
        color: white;
    }
`



function Card({link, position, name}) {
    return (
        <Item>
            <ImageContainer>
                <img src={link} alt="image" />
            </ImageContainer>
            <Name>
                {name}
            </Name>
            <Position>
                {position}
            </Position>
        </Item>
    );
}

export default Card;