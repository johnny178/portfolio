import React from 'react'
import { Experience } from '../components'
import { BlockTitle } from '../components'
import { experienceData } from '../constants/pageData'

export function ExperienceContainer() {
  return (
    <Experience>
      <Experience.Container id='experience'>
        <Experience.Content>
          <BlockTitle title='e x p e r i e n c e' />
          <Experience.Row>
            {
              experienceData.map(item => (
                <Experience.Colunm key={item.id}>
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
                  <Experience.Paragraph>{item.content}</Experience.Paragraph>
                </Experience.Colunm>
              ))
            }
          </Experience.Row>
        </Experience.Content>
      </Experience.Container>

    </Experience>
  )
}