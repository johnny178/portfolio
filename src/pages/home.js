/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

import { HeaderContainer } from '../containers/header';
import { AboutContainer } from '../containers/about';
import { SkillContainer } from '../containers/skill';
import { ExperienceContainer } from '../containers/experience';
import { ContactContainer } from '../containers/contact';
import { PortfolioContainer } from '../containers/portfolio';

import { Cover, FloatingBtn } from '../components';
import { FloatingBtnContext } from '../context/floatingBtn/floatingBtn';
import { getCoverImage } from '../constants/pageData';

import ReactGA from 'react-ga4';

ReactGA.initialize(process.env.REACT_APP_GA_KEY);
export default function Home() {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    // console.log(window.location.pathname + window.location.search)
    // ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.send('pageview');
  }, []);

  return (
    <>
      <FloatingBtn.Container onClick={() => setIsPressed(!isPressed)}>
        <FloatingBtn.Line />
      </FloatingBtn.Container>
      <FloatingBtnContext.Provider value={isPressed}>
        <HeaderContainer onClick={() => setIsPressed(!isPressed)}>
          <Cover.Image src={getCoverImage(600)} srcSet={`${getCoverImage(600)} 600w, ${getCoverImage(768)} 768w, ${getCoverImage(1000)} 1000w`} alt={'coverImage'} />
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