import React from 'react'
import { BlockTitle, Portfolio } from '../components';
import { portfolioData } from '../constants/pageData';

export function PortfolioContainer() {
  return (
    <Portfolio>
      <Portfolio.Container id='portfolio'>
        <Portfolio.Content>
          <BlockTitle title={'portfolio'} />
          {
            portfolioData.map(item => (
              <Portfolio.Pane key={item.id}>
                <Portfolio.LeftPane>
                  <Portfolio.TitlePane>
                    <Portfolio.Bullet color={item.color} />
                    <Portfolio.Title color={item.color}>{item.title}</Portfolio.Title>
                  </Portfolio.TitlePane>
                  <Portfolio.Paragraph>主要功能 : </Portfolio.Paragraph>
                  <Portfolio.UnorderedList>
                    {
                      item.feature.map(content => (
                        <Portfolio.List key={content}>{`- ${content}`}</Portfolio.List>
                      ))
                    }
                  </Portfolio.UnorderedList>
                  <Portfolio.Paragraph>使用技術 : </Portfolio.Paragraph>
                  <Portfolio.UnorderedList>
                    {
                      item.technology.map(content => (
                        <Portfolio.List key={content}>{`- ${content}`}</Portfolio.List>
                      ))
                    }
                  </Portfolio.UnorderedList>
                </Portfolio.LeftPane>
                <Portfolio.RightPane>
                  <Portfolio.Image src={item.image} />
                  <Portfolio.ButtonPane>
                    <Portfolio.Button id='demo' href={item.demoUrl} target='_blank'>Demo</Portfolio.Button>
                    <Portfolio.Button id='github' href={item.githubUrl} target='_blank'>Github</Portfolio.Button>
                  </Portfolio.ButtonPane>
                </Portfolio.RightPane>
              </Portfolio.Pane>
            ))
          }

        </Portfolio.Content>
      </Portfolio.Container>
    </Portfolio>
  );

  /*
  let renderWorks = () => {
    return (
      <>
        <Portfolio.SortBar>
            {
              portfolioTypes.map(item => (
                <Portfolio.SortBtn
                  key={item}
                  id={item}
                  pressedType={pressedType}
                  onClick={() => setPressedType(item)}
                >
                  {item}
                </Portfolio.SortBtn>
              ))
            }
          </Portfolio.SortBar>
          <Portfolio.Collection>
            {
            portfolioData.map(item => (
              <Portfolio.Works key={item}>
                <Portfolio.Image src={item.image} />
              </Portfolio.Works>
              ))
            }
          </Portfolio.Collection>
      </>
    )
  }
  */
}