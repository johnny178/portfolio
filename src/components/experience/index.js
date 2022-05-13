import React from 'react'
import { Container, Content, Row, Column, Pane, Title, Bullet, NameTime, CareerName, Time, Company, Paragraph, UnorderedList, List } from './styles/experience'

export default function Experience({ children }) {
  return children;
}

Experience.Container = function ExperienceContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Experience.Content = function ExperienceContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>
}

Experience.Row = function ExperienceRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>
}

Experience.Column = function ExperienceColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>
}

Experience.Pane = function ExperiencePane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}

Experience.Title = function ExperienceTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Experience.Bullet = function ExperienceBullet({ ...restProps }) {
  return <Bullet {...restProps} />
}

Experience.NameTime = function ExperienceNameTime({ children, ...restProps }) {
  return <NameTime {...restProps}>{children}</NameTime>
}

Experience.CareerName = function ExperienceCareerName({ ...restProps }) {
  return <CareerName {...restProps} />
}

Experience.Time = function ExperienceTime({ ...restProps }) {
  return <Time {...restProps} />
}

Experience.Company = function ExperienceCompany({ ...restProps }) {
  return <Company {...restProps} />
}

Experience.Paragraph = function ExperienceParagraph({ ...restProps }) {
  return <Paragraph {...restProps} />
}

Experience.UnorderedList = function ExperienceUnorderedList({ ...restProps }) {
  return <UnorderedList {...restProps} />
}

Experience.List = function ExperienceList({ ...restProps }) {
  return <List {...restProps} />
}