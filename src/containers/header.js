import React, { useState, useEffect } from 'react'
import { FloatingBtnContext } from '../context/floatingBtn/floatingBtn';
import { Header } from '../components'
import { navigationBar } from '../constants/pageData'

export function HeaderContainer({ children, onClick }) {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  function calOffset(id) {
    switch (id) {
      case 0:
        return -200;
      case 1:
        return -200;
      case 2:
        return -200;
      case 3:
        return -350;
      case 4:
        return -420;
      case 5:
        return -420;
      default:
        return -80;
    }
  }

  return (
    <Header>
      <Header.Frame id='home'>
        <FloatingBtnContext.Consumer>
          {value =>
            <Header.NavigationBar isPressed={value} scrollNav={scrollNav}>
              {navigationBar.map(item => {
                return (
                  <Header.NavigationBtn
                    key={item.id}
                    to={item.name}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={calOffset(item.id)}
                    onClick={onClick}
                    scrollNav={scrollNav}
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