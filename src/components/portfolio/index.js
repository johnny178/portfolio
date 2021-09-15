import React from 'react'
import { Container, Content, Pane, LeftPane, TitlePane, Bullet, Title, Paragraph, UnorderedList, List, RightPane, Image, ButtonPane, Button } from './styles/portfolio';

export default function Portfolio({ children }) {
  return children;
}

Portfolio.Container = function PortfolioContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Portfolio.Content = function PortfolioContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>
}

Portfolio.Pane = function PortfolioPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane >
}

//左半邊
Portfolio.LeftPane = function PortfolioLeftPane({ children, ...restProps }) {
  return <LeftPane {...restProps}>{children}</LeftPane >
}

//標題
Portfolio.TitlePane = function PortfolioTitlePane({ children, ...restProps }) {
  return <TitlePane {...restProps}>{children}</TitlePane >
}

Portfolio.Bullet = function PortfolioBullet({ ...restProps }) {
  return <Bullet {...restProps} />
}

Portfolio.Title = function PortfolioTitle({ ...restProps }) {
  return <Title {...restProps} />
}

//詳細內容
Portfolio.Paragraph = function PortfolioParagraph({ ...restProps }) {
  return <Paragraph {...restProps} />
}

Portfolio.UnorderedList = function PortfolioUnorderedList({ ...restProps }) {
  return <UnorderedList {...restProps} />
}

Portfolio.List = function PortfolioList({ ...restProps }) {
  return <List {...restProps} />
}

//右半邊
Portfolio.RightPane = function PortfolioRightPane({ children, ...restProps }) {
  return <RightPane {...restProps}>{children}</RightPane >
}

Portfolio.Image = function PortfolioImage({ ...restProps }) {
  return <Image {...restProps} />
}

Portfolio.ButtonPane = function PortfolioButtonPane({ children, ...restProps }) {
  return <ButtonPane {...restProps}>{children}</ButtonPane >
}

Portfolio.Button = function PortfolioButton({ ...restProps }) {
  return <Button {...restProps} />
}








/*
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

    Portfolio.Image = function PortfolioImage({...restProps}) {
  return <Image {...restProps} />
}
    */