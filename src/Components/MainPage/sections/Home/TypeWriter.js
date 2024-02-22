import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect'


const Title = styled.h2`
    font-size: ${props => props.theme.fontxxxl};
    text-transform: capitalize; // каждое слово с большой буквы
    width:80%;
    color: ${props => props.theme.text};
    align-self: flex-start;
    @media (max-width: 64em) {
        margin-top: 1vh;
        font-size: 5vw;
        white-space: nowrap;
        align-self: center;
        text-align: center;
    }

`

const Title1 = styled.h2`
    margin-top: -0.5vh;
    font-size: ${props => props.theme.fontxl};
    text-transform: capitalize; // каждое слово с большой буквы
    width:80%;
    color: ${props => props.theme.black};
    align-self: flex-start;
    white-space: pre-line;

    span{
        text-transform: capitalize;
    }
    .text-1{
        color:#DD6B20;
    }
    .text-2{
        color: #3182CE;
    }

    @media (max-width: 64em) {
        margin-top: 1vh;
        font-size: 3vw;
        align-self: center;
        text-align: center;
    }
    @media (max-width: 48em) {
        margin-top: 1vh;
        font-size: 3vw;
        align-self: center;
        text-align: center;
    }
`
const SubTitle = styled.h3`
    font: ${props => props.theme.fontlg};
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
    font-weight:600; //Жирность текста
    margin-bottom:1 rem;
    width:80%;
    align-self:flex-start;

    .sui{
        color: #3182CE;
    }
    @media (max-width: 64em) {
        font-size: 3vw;
        margin-top: 1vh;
        align-self: center;
        text-align: center;
    }
    @media (max-width: 48em) {
        font-size: 3vw;
        margin-top: 1vh;
        align-self: center;
        text-align: center;
    }
`

function TypeWriter() {
    return (
        <>
            <Title>
                SEI PEPE
            </Title>

            <Title1>
                <Typewriter
                    options={{
                        autostart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('<span class = "text-1">Made By PEPE</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('<span class = "text-2">Ribbit Ribbit!</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }}
                />
            </Title1>
            <SubTitle>
                Built on <span class='sui'> $SEI </span>
            </SubTitle>
        </>
    );
}

export default TypeWriter;