import React from 'react'
import { Container, Content, Image, Pane, TitlePane, TitleOne, TitleTwo, Article, ArticlePane } from '../../components/about/styles/about'


export default function About({ children }) {
  return children;
}

About.Container = function AboutContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

About.Content = function AboutContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>
}

About.Pane = function AboutPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}

About.ArticlePane = function AboutArticlePane({ children, ...restProps }) {
  return <ArticlePane {...restProps}>{children}</ArticlePane>
}

About.Image = function AboutImage({ ...restProps }) {
  return <Image {...restProps} />
}

About.TitlePane = function AboutTitlePane({ children, ...restProps }) {
  return <TitlePane {...restProps}>{children}</TitlePane>
}

About.TitleOne = function AboutTitleOne({ ...restProps }) {
  return <TitleOne {...restProps} />
}

About.TitleTwo = function AboutTitleTwo({ ...restProps }) {
  return <TitleTwo {...restProps} />
}

About.Article = function AboutArticle({ ...restProps }) {
  return <Article {...restProps} />
}