import React, { useState } from 'react';

import { HeaderContainer } from '../containers/header';
import { AboutContainer } from '../containers/about';
import { SkillContainer } from '../containers/skill';
import { ExperienceContainer } from '../containers/experience';

import { Cover, FloatingBtn } from '../components';
import { FloatingBtnContext } from '../context/floatingBtn/floatingBtn';
import Video from '../videos/video.mp4';
import { PortfolioContainer } from '../containers/portfolio';

export default function Home() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <FloatingBtn.Container onClick={() => setIsPressed(!isPressed)}>
        <FloatingBtn.Line />
      </FloatingBtn.Container>
      <FloatingBtnContext.Provider value={isPressed}>
        <HeaderContainer onClick={() => setIsPressed(!isPressed)}>
          <Cover.Video autoPlay preload playsinline loop muted poster="" src={Video} controls={false} type='video/mp4' />
          <Cover.Container>
            <Cover.Name>Johnny Lin</Cover.Name>
            <Cover.Description>Coding is my life.</Cover.Description>
            <Cover.More
              to='about'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >More
            </Cover.More>
          </Cover.Container>
        </HeaderContainer>
      </FloatingBtnContext.Provider>
      <AboutContainer />
      <SkillContainer />
      <ExperienceContainer />
      <PortfolioContainer />
    </>
  );
}