import React from 'react'
import { Container, Content, Row, Colunm, Pane, Title, Bullet, NameTime, CareerName, Time, Company, Paragraph } from './styles/experience'

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

Experience.Colunm = function ExperienceColunm({ children, ...restProps }) {
  return <Colunm {...restProps}>{children}</Colunm>
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