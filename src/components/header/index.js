import React, { useState } from 'react'
import { Container, NavigationBtn, NavigationBar } from './styles/header'


export default function Header({ children }) {
  return children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.NavigationBar = function HeaderNavigationBar({ children, ...restProps }) {

  return <NavigationBar {...restProps}>{children}</NavigationBar>;
}

Header.NavigationBtn = function HeaderNavigationBtn({ ...restProps }) {
  console.log(restProps)
  const [isPressed, setIsPressed] = useState(false);

  return (
    <NavigationBtn
      onClick={() => setIsPressed(!isPressed)}
      {...restProps}
    />
  );
}