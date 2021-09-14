import React from 'react'
import { Container, Content, SortBar, SortBtn, Collection, Works } from './styles/portfolio';

export default function Portfolio({ children }) {
  return children;
}

Portfolio.Container = function PortfolioContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Portfolio.Content = function PortfolioContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>
}

//分類欄
Portfolio.SortBar = function PortfolioSortBar({ children, ...restProps }) {
  return <SortBar {...restProps}>{children}</SortBar>
}

Portfolio.SortBtn = function PortfolioSortBtn({ ...restProps }) {
  return <SortBtn {...restProps} />
}

//作品
Portfolio.Collection = function PortfolioCollection({ children, ...restProps }) {
  return <Collection {...restProps}>{children}</Collection>
}

Portfolio.Works = function PortfolioWorks({ children, ...restProps }) {
  return <Works {...restProps}>{children}</Works>
}
