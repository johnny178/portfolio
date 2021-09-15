import React from 'react'
import { BlockTitle, Portfolio } from '../components';
import { portfolioData } from '../constants/pageData';

export function PortfolioContainer() {
  // const [pressedType, setPressedType] = useState('all');

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
                    <Portfolio.Title color={item.color}>加密貨幣</Portfolio.Title>
                  </Portfolio.TitlePane>
                  <Portfolio.Paragraph>{item.content}</Portfolio.Paragraph>
                  <Portfolio.UnorderedList>
                    {
                      item.list.map(content => (
                        <Portfolio.List key={content}>{`- ${content}`}</Portfolio.List>
                      ))
                    }
                  </Portfolio.UnorderedList>
                </Portfolio.LeftPane>
                <Portfolio.RightPane>
                  <Portfolio.Image src={item.image} />
                  <Portfolio.ButtonPane>
                    <Portfolio.Button id='demo'>Demo</Portfolio.Button>
                    <Portfolio.Button id='github'>Github</Portfolio.Button>
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