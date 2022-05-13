import React from 'react'
import { Experience } from '../components'
import { BlockTitle } from '../components'
import { experienceData } from '../constants/pageData'

export function ExperienceContainer() {
  return (
    <Experience>
      <Experience.Container id='experience'>
        <Experience.Content>
          <BlockTitle title='experience' />
          <Experience.Row>
            {
              experienceData.map(item => (
                <Experience.Column key={item.id}>
                  <Experience.Pane>
                    <Experience.Title>
                      <Experience.Bullet color={item.color} />
                      <Experience.NameTime>
                        <Experience.CareerName color={item.color}>{item.name}</Experience.CareerName>
                        <Experience.Time color={item.color}>{item.time}</Experience.Time>
                      </Experience.NameTime>
                    </Experience.Title>
                    <Experience.Company>{item.company}</Experience.Company>
                  </Experience.Pane>
                  {
                    item.content ?
                      <Experience.Paragraph>{item.content}</Experience.Paragraph>
                      :
                      <Experience.UnorderedList>
                        {
                          item.contentList.map(content => (
                            <div key={content.id} style={{ display: 'flex' }}>
                              -<Experience.List>{`${content}`}</Experience.List>
                            </div>
                          ))
                        }
                      </Experience.UnorderedList>
                  }
                </Experience.Column>
              ))
            }
          </Experience.Row>
        </Experience.Content>
      </Experience.Container>
    </Experience>
  )
}