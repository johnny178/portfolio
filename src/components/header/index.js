import React, { useState, useEffect } from 'react'
import { Container, NavigationBtn, NavigationBar } from './styles/header'


export default function Header({ children }) {
  return children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.NavigationBar = function HeaderNavigationBar({ children, ...restProps }) {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return <NavigationBar {...restProps} scrollNav={scrollNav}>{children}</NavigationBar>;
}

Header.NavigationBtn = function HeaderNavigationBtn({ ...restProps }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <NavigationBtn
      isPressed={isPressed}
      onClick={() => setIsPressed(!isPressed)}
      {...restProps}
    />
  );
}