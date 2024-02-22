import React from 'react';
import styled from 'styled-components';
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper";
import logo from './../../../../assets/ToolsAssets/dinofree.webp'
import tuz from './../../../../assets/ToolsAssets/img3.webp'



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Container = styled.div`
    width: 100%;
    height:100%;

    @media (max-width: 64em) {
        height: 40vh;
        width: 90vw;
        justify-content: center;
    }


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
    
    .swiper-button-next{
        color:${props=>props.theme.white};
        @media (max-width: 64em) {
        display: none;
    }
    }

    .swiper-button-prev{
        color:${props=>props.theme.white};
        @media (max-width: 64em) {
        display: none;
    }
    }

    img{
        width: 100%;
        height: auto;
        border-radius: 20px;
    }


`

function Carousel() {
    return (
        <Container>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}

                pagination={{
                    type: 'bullets',

                }}
                scrollbar={{
                    draggable: true
                }}
                grabCursor={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={logo} alt="logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={tuz} alt="logo" />
                </SwiperSlide>
            </Swiper>
        </Container>
    );
}

export default Carousel;