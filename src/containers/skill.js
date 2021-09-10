import React from 'react'
import { Skill } from '../components';
import { BlockTitle } from '../components';

export function SkillContainer() {
  return (
    <Skill>
      <Skill.Frame>
        <Skill.Content>
          <BlockTitle title={'skills'} />
          <Skill.Row>
            <Skill.Block>
              <Skill.Title>graphic design</Skill.Title>
              <Skill.Paragraph>
                Vivamus accumsan eget mi quis iaculis. Integer<br /><br />
                tristique cursus sapien, sit amet porttitor neque<br /><br />
                imperdiet a. Morbi ut dui vehicula, elementum est
              </Skill.Paragraph>
            </Skill.Block>
            <Skill.Block>
              <Skill.Title>graphic design</Skill.Title>
              <Skill.Paragraph>
                Vivamus accumsan eget mi quis iaculis. Integer<br /><br />
                tristique cursus sapien, sit amet porttitor neque<br /><br />
                imperdiet a. Morbi ut dui vehicula, elementum est
              </Skill.Paragraph>
            </Skill.Block>
            <Skill.Block>
              <Skill.Title>graphic design</Skill.Title>
              <Skill.Paragraph>
                Vivamus accumsan eget mi quis iaculis. Integer<br /><br />
                tristique cursus sapien, sit amet porttitor neque<br /><br />
                imperdiet a. Morbi ut dui vehicula, elementum est
              </Skill.Paragraph>
            </Skill.Block>
          </Skill.Row>
        </Skill.Content>
      </Skill.Frame>
    </Skill>
  );
}