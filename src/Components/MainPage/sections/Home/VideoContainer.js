import React from 'react';
import styled from 'styled-components';
import logo from './../../../../assets/ToolsAssets/tuz.png'

const VideoContaineer = styled.div`
    width:100%;
    height: 100vh;

    .image{
        width:100%;
        height:auto;
    }
`

function VideoContainer() {
    return (
        <VideoContaineer>
            <image src = {logo} alt = "image" />
        </VideoContaineer>
    );
}

export default VideoContainer;