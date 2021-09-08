import React from 'react'
import { Header } from '../components'
import { navigationBar } from '../constants/navigationBar'
import { Cover } from '../components'
// import me from '../images/cover_image.JPG'
// import me from '../images/cover.png'
import Video from '../videos/video.mp4'

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.NavigationBar>
          {navigationBar.map(item => {
            return (
              <Header.NavigationBtn key={item.id}>{item.name}</Header.NavigationBtn>
            );
          })}
          {children}
        </Header.NavigationBar>

        {/* <Cover.ImageBackground src={me} /> */}
        <Cover.Video autoPlay loop muted src={Video} type='video/mp4' />
        <Cover.CoverContainer>
          <Cover.Name>Johnny Lin</Cover.Name>
          <Cover.Description>Coding is my life.</Cover.Description>
          {/* <Cover.More>More</Cover.More> */}
        </Cover.CoverContainer>
      </Header.Frame>
    </Header>
  );
}