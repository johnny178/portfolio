import React from 'react'
import { FloatingBtnContext } from '../context/floatingBtn/floatingBtn';
import { Header } from '../components'
import { navigationBar } from '../constants/pageData'
// import me from '../images/cover_image.JPG'
// import me from '../images/cover.png'

export function HeaderContainer({ children, onClick }) {
  return (
    <Header>
      <Header.Frame id='home'>
        <FloatingBtnContext.Consumer>
          {value =>
            <Header.NavigationBar isPressed={value}>
              {navigationBar.map(item => {
                return (
                  <Header.NavigationBtn
                    key={item.id}
                    to={item.name}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    onClick={onClick}
                  >
                    {item.name}
                  </Header.NavigationBtn>
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