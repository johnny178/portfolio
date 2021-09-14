import React, { useState } from 'react'
import { BlockTitle, Portfolio } from '../components';
import { portfolioTypes } from '../constants/pageData';

export function PortfolioContainer() {
  const [pressedType, setPressedType] = useState('all');
  let test = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Portfolio>
      <Portfolio.Container id='portfolio'>
        <Portfolio.Content>
          <BlockTitle title={'portfolio'} />
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
              test.map(item => (
                <Portfolio.Works key={item}>YO</Portfolio.Works>
              ))
            }
          </Portfolio.Collection>
        </Portfolio.Content>
      </Portfolio.Container>
    </Portfolio>
  );
}