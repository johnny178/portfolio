import React from 'react'
import { Container, Content, Row, Block, Title, Paragraph, ProgressBar, Progress, PercentText } from './styles/skill';

export default function Skill({ children }) {
  return children;
}

Skill.Frame = function SkillFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Skill.Content = function SkillContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>
}

Skill.Row = function SkillRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
}

Skill.Block = function SkillBlock({ children, ...restProps }) {
  return <Block {...restProps}>{children}</Block>;
}

Skill.Title = function SkillTitle({ ...restProps }) {
  return <Title {...restProps} />
}

Skill.Paragraph = function SkillParagraph({ ...restProps }) {
  return <Paragraph {...restProps} />
}

//進度條
Skill.ProgressBar = function SkillProgressBar({ ...restProps }) {
  return (
    <ProgressBar {...restProps}>
      <Skill.Progress {...restProps} />
      <Skill.PercentText {...restProps} >{restProps.percent}%</Skill.PercentText>
    </ProgressBar>
  )
}

Skill.Progress = function SkillProgress({ ...restProps }) {
  return <Progress {...restProps} />;
}

Skill.PercentText = function SkillPercentText({ ...restProps }) {
  return <PercentText {...restProps} />;
}
