import React, { useState } from 'react';
import { FloatingBtnContext } from '../context/floatingBtn/floatingBtn';
import { HeaderContainer } from '../containers/header';
import { AboutContainer } from '../containers/about';
import { SkillContainer } from '../containers/skill';
import { Cover, FloatingBtn } from '../components';
import Video from '../videos/video.mp4';

export default function Home() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <FloatingBtn.Container onClick={() => setIsPressed(!isPressed)}>
        <FloatingBtn.Line />
      </FloatingBtn.Container>
      <FloatingBtnContext.Provider value={isPressed}>
        <HeaderContainer>
          <Cover.Video autoPlay preload playsinline loop muted poster="" src={Video} controls={false} type='video/mp4' />
          <Cover.Container>
            <Cover.Name>Johnny Lin</Cover.Name>
            <Cover.Description>Coding is my life.</Cover.Description>
            <Cover.More>More</Cover.More>
          </Cover.Container>
        </HeaderContainer>
      </FloatingBtnContext.Provider>
      <AboutContainer />
      <SkillContainer />
    </>
  );
}