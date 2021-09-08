import React from 'react'
import { HeaderContainer } from '../containers/header';
import { AboutContainer } from '../containers/about';
import { Cover } from '../components'
import Video from '../videos/video.mp4'

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Cover.Video autoPlay loop muted src={Video} type='video/mp4' />
        <Cover.CoverContainer>
          <Cover.Name>Johnny Lin</Cover.Name>
          <Cover.Description>Coding is my life.</Cover.Description>
          <Cover.More>More</Cover.More>
        </Cover.CoverContainer>
      </HeaderContainer>
      <AboutContainer />
    </>
  );
}