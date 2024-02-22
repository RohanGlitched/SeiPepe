import React from 'react';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';


const Section = styled.section`
min-height: 27vh;
width:100vw;
margin-top: 0vh;
position: relative;
background-color:${props => props.theme.body};
img{
    width: 100%;
    height: auto;
}
`

function Phase12() {
    return (
        <Section>
            <img src = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWFRSFfs4eE2HB8ybYTBtUZBjZxya4qyja6nA71MrbwhD/img-5290.webp"/>
        </Section>
    );
}

export default Phase12;