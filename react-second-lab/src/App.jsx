import React from 'react';
import Main from './components/Main/Main';
import { profilesData } from './Data';
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    text-align: center;
    padding: 20px;
    margin: 0;
    background: linear-gradient(13deg, #ffe2ca, #9a7798, #c5c48d);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Arial', sans-serif;
    color: #480448;
    pointer-events: auto;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Main cards={profilesData} />
    </>
  );
};

export default App;