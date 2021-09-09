import React from 'react'
import { Container, Line } from './styles/floatingBtn';

export default function FloatingBtn({ children }) {
  return children;
}

FloatingBtn.Container = function FloatingBtnContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}


FloatingBtn.Line = function FloatingBtnLine({ ...restProps }) {
  return <Line {...restProps} />
}