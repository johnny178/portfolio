import React from 'react'
import { Skill } from '../components';
import { BlockTitle } from '../components';
import { skillData } from '../constants/pageData';

export function SkillContainer() {
  return (
    <Skill>
      <Skill.Frame id='skills'>
        <Skill.Content>
          <BlockTitle title={'skills'} />
          <Skill.Row>
            {skillData.map(item => (
              <Skill.Block key={item.id}>
                <Skill.Title color={item.color}>{item.name}</Skill.Title>
                <Skill.Paragraph>{item.content}</Skill.Paragraph>
                <Skill.ProgressBar color={item.color} percent={item.percent} />
              </Skill.Block>
            ))}
          </Skill.Row>
        </Skill.Content>
      </Skill.Frame>
    </Skill>
  );
}