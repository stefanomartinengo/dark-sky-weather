import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components'
import { reset }  from 'styled-reset';
import Wrapper from './components/styles/Wrapper';
import {HeaderMain, HeaderElements} from './components/styles/Header';
import HomePage from './components/HomePage';

const GlobalStyle = createGlobalStyle`
${reset};
box-sizing: border-box;
`;

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <HeaderMain>
      <HeaderElements>
        Good Day Fer Hay?
      </HeaderElements>
    </HeaderMain>
    <Wrapper>
      <HomePage />
    </Wrapper>
  </React.Fragment>
)

export default App;
