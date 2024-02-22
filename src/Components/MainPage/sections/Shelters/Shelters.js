import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import ShelterPage from './ShelterPage';



const Section = styled.section`
min-height: 100vh;
width:100vw;
position: relative;
background-color:${props => props.theme.body};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 64em) {
        border-radius: 0;
        width: 100%;
        background-color: white;
    }
`
const Container = styled.div`
    width:85%;
    min-height: 80vh;
    margin: 0 auto; //
    border-radius: 40px;
    background-color: white;
    border: 7px solid rgba(0,0, 0, 0.7);
    display: flex; // гибкий контейнер
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру

    .swiper{
        width: 100%;
        height: 100%;
        align-self: center;
    }
    .swiper-slide{
        width: 90vw;
        height: 75vh;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .swiper-button-next{
        color:#272727;
        @media (max-width: 64em) {
            display: none;
        }
    }

    .swiper-button-prev{
        color:#272727;
        @media (max-width: 64em) {
            display: none;
        }
    }

    img{
        width: 100%;
        height: auto;
        border-radius: 20px;
    }
    @media (max-width: 64em) {
        border-radius: 0;
        width: 100%;
        border: 0px solid rgba(0,0, 0, 0.7);
    }

`

const Box = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const MainTitle = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: ${props => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 2px solid ${props => props.theme.black};
    width: fit-content;

    @media (max-width: 64em) {
        font-size: 5vw;
        color:#272727;
    }

`

function Shelters() {
    return (
        <Section id="shelters">
            <MainTitle>
                Shelters
            </MainTitle>
            <Container>
                <Swiper
                    pagination={{
                        type: "bullets",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <ShelterPage title={"Edinburgh Dog and Cat Home"} text={"This is a small but very good shelter from Scotland, founded in 1884. For 140 years, this shelter has been helping many cats and dogs. «Here at Edinburgh Dog and Cat Home, we strive to make sure that every pet has the loving home it deserves. And we get our claws into our cause.»"} links={[
                            "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmSNj1WocW4cuVhuk2Vko4be35xiwVajVTHEpYtJWfSpqL/7.png",
                            "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmSNj1WocW4cuVhuk2Vko4be35xiwVajVTHEpYtJWfSpqL/2.png",
                            "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmSNj1WocW4cuVhuk2Vko4be35xiwVajVTHEpYtJWfSpqL/3.png",
                            "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmSNj1WocW4cuVhuk2Vko4be35xiwVajVTHEpYtJWfSpqL/4.png",
                            "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmSNj1WocW4cuVhuk2Vko4be35xiwVajVTHEpYtJWfSpqL/5.png",
                            "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmSNj1WocW4cuVhuk2Vko4be35xiwVajVTHEpYtJWfSpqL/6.png",
                            "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmSNj1WocW4cuVhuk2Vko4be35xiwVajVTHEpYtJWfSpqL/1.png",
                            "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmSNj1WocW4cuVhuk2Vko4be35xiwVajVTHEpYtJWfSpqL/8.png",
                            "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmSNj1WocW4cuVhuk2Vko4be35xiwVajVTHEpYtJWfSpqL/9.png",
                        ]} toSite={"https://edch.org.uk/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ShelterPage title={"Heaven on Earth"} text={"The shelter was founded in 2000 in Los Angeles, which has a large number of assistance programs for cats and kittens. Heaven on Earth has come a long way in its 20 years as an organization, and the team continues to change and grow."} links={[
                            "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmSsBgyRAWVyj3x9qWCBh3cUNzPEEbUQ85zssHTCv6bFop/1.webp",
                            "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmSsBgyRAWVyj3x9qWCBh3cUNzPEEbUQ85zssHTCv6bFop/2.webp",
                            "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmSsBgyRAWVyj3x9qWCBh3cUNzPEEbUQ85zssHTCv6bFop/3.webp",
                            "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmSsBgyRAWVyj3x9qWCBh3cUNzPEEbUQ85zssHTCv6bFop/4.webp",
                            "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmSsBgyRAWVyj3x9qWCBh3cUNzPEEbUQ85zssHTCv6bFop/5.webp",
                            "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmSsBgyRAWVyj3x9qWCBh3cUNzPEEbUQ85zssHTCv6bFop/6.webp",
                        ]} toSite={"https://heavenlypets.org/"} />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </Section>
    );
}

export default Shelters;
