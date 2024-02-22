import React from 'react';
import styled from 'styled-components';


const Item = styled.div`
    width: 16vw;
    height: 45vh;
    margin: 0vw;
    padding: 2vh;
    color: black;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;

    :hover{
        transform: scale(1);
    }
    img{
        width:150%;
        height: auto;
        border-radius: 10px;
        transition: all 0.4s ease;
        margin-left: -4vw;        
        :hover{
            transform: scale(1.2);
        }
    }
    name{
        font-size: 1.5vw;
        margin-top: -8vh;
        color: ${props=>props.theme.white};
        @media (max-width: 64em) {
            font-size: 2vw;
            color: white;
    }
    }
    @media (max-width: 64em) {
        margin-left: 10vw;
        width: 20vw;
    }

`

function PartnerCard({image, text, link}) {
    return (
        <Item>
                <a href = {link}>
                <img src={image} alt="image" />
                </a>
                <name>
                    {text}
                </name>
        </Item>
    );
}

export default PartnerCard;