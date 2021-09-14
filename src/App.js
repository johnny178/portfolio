import React from 'react'
import { Home } from '../src/pages'
import { ResetStyle, GlobalStyles } from './global-styles';

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyles />
      <Home />
    </>
  );
}

export default App;
