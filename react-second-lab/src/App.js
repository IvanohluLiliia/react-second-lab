// src/App.jsx
import React from 'react';
import Main from './components/Main/Main';
import { cardsData } from './Data';
import './App.css';


const App = () => {
  return (
    <div className="app">
      <h1>Галерея карток</h1>
      <Main cards={cardsData} />
    </div>
  );
};

export default App;
