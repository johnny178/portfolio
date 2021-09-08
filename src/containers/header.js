import React from 'react'
import { Header } from '../components'
import { navigationBar } from '../constants/navigationBar'
// import me from '../images/cover_image.JPG'
// import me from '../images/cover.png'

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
        </Header.NavigationBar>
        {children}
      </Header.Frame>
    </Header>
  );
}