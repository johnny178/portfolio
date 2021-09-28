import React, { useState } from 'react';

import { HeaderContainer } from '../containers/header';
import { AboutContainer } from '../containers/about';
import { SkillContainer } from '../containers/skill';
import { ExperienceContainer } from '../containers/experience';
import { ContactContainer } from '../containers/contact';
import { PortfolioContainer } from '../containers/portfolio';

import { Cover, FloatingBtn } from '../components';
import { FloatingBtnContext } from '../context/floatingBtn/floatingBtn';
import { useWindowDimensions } from '../hooks';

// import Video from '../videos/video.mp4';
import CodingLandscape from '../images/coding-landscape.jpg'
import CodingPortrait from '../images/coding-portrait.jpg'

export default function Home() {
  const { width } = useWindowDimensions();
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <FloatingBtn.Container onClick={() => setIsPressed(!isPressed)}>
        <FloatingBtn.Line />
      </FloatingBtn.Container>
      <FloatingBtnContext.Provider value={isPressed}>
        <HeaderContainer onClick={() => setIsPressed(!isPressed)}>
          {/* <Cover.Video autoPlay playsinline loop muted poster="" src={Video} controls={false} type='video/mp4' /> */}
          {width > 600 ? <Cover.Video src={CodingLandscape} /> : <Cover.Video src={CodingPortrait} />}
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
      <ContactContainer />
    </>
  );
}