import React from 'react';
import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
  } from 'video-react';

  export const Video= (props:{link:string}) => {
    return (
        <iframe className='w-full lg:w-96' height={'200px'} width={'300px'}
        src={props.link} 
        title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
        </iframe>
    );
  };
  