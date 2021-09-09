import React from 'react'
import { FloatingBtnContext } from '../context/floatingBtn/floatingBtn';
import { Header } from '../components'
import { navigationBar } from '../constants/navigationBar'
// import me from '../images/cover_image.JPG'
// import me from '../images/cover.png'

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame >
        <FloatingBtnContext.Consumer>
          {value =>
            <Header.NavigationBar isPressed={value}>
              {navigationBar.map(item => {
                return (
                  <Header.NavigationBtn key={item.id}>{item.name}</Header.NavigationBtn>
                );
              })}
            </Header.NavigationBar>
          }
        </FloatingBtnContext.Consumer>
        {children}
      </Header.Frame>
    </Header>
  );
}