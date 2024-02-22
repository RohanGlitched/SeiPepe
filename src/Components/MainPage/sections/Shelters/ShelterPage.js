import React from 'react';
import { useRef } from "react";
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Button from '../../../Button';

const Container = styled.div`
    width:90%;
    min-height: 80vh;
    margin: 0 auto; //
    display: flex; // гибкий контейнер
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру

    .swiper{
        width: 80%;
        align-self: center;
    }
    .swiper-slide{
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 64em) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        &>*:last-child{
            width: 80%;
            margin-top: -10vh ;
        }
    }
`

const Box = styled.div`
    width:60%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .swiper{
        width: 100%;
        align-self: center;
    }
    .swiper-slide{
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img{
        width: 100%;
        height: auto;
        border-radius: 40px;
        @media (max-width: 64em) {
        border-radius: 0px;
    }
    }
    @media (max-width: 64em) {
        margin-top: -20vh;
        height: 50vh;
        width: 100%;
        border-radius: 0px;
    }

`
const Box1 = styled.div`
    width:60%;
    height:100%;
    display:flex;
    flex-direction: column;
    gap: 2vh;
    justify-content: center;
    align-items: center;

    .swiper{
        width: 80%;
        align-self: center;
    }
    .swiper-slide{
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img{
        width: 95%;
        height: auto;
        border-radius: 40px;
    }
    @media (max-width: 64em) {
        height: 60vh;
        width: 90%;
    }

`

const Title = styled.h2`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: #DD6B20;
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;
    @media (max-width: 64em) {
        font-size: 5vw;
        align-self: center;
        text-align: center;
    }
`

const SubText = styled.p`
    font-size: ${props => props.theme.fontlg};
    text-transform: none;
    color: ${props => props.theme.black};
    align-self: flex-start;
    text-align: justify;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
    white-space: pre-line;
    @media (max-width: 64em) {
        font-size: 3vw;
        align-self: center;
        text-align: center;
    }
`

const SubTextLight = styled.p`
    font-size: 1.5vw;
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
    @media (max-width: 64em) {
        font-size: 3vw;
        align-self: center;
        text-align: center;
    }
`

const ButtonContainer = styled.div`
    margin-left: -25vh;
    @media (max-width: 64em) {
        border-radius: 0;
        width: 90%;
        margin-left: 40vw;
    }
`

function ShelterPage({ text, title, links, toSite }) {
    return (
        <Container>
            <Box>
                <Swiper
                    autoplay={{
                        delay: 2000,
                    }}
                    scrollbar={{
                        draggable: true
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {Object.keys(links).map(element =>
                        <SwiperSlide><img src={links[element]} alt="logo" /></SwiperSlide>
                    )}
                </Swiper>
            </Box>
            <Box1>
                <Title>
                    {title}
                </Title>
                <SubText>
                    {text}
                </SubText>
                <ButtonContainer>
                    <Button text={"Go To Site"} link = {toSite}/>   
                </ButtonContainer>
            </Box1>
        </Container>
    );
}

export default ShelterPage;