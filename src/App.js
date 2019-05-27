import React from 'react';
import trollFace from './images/trollFace.png';
import './App.css';

import { MemeGenerator } from './components/MemeGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={trollFace} className="App-logo" alt="logo" />
        <br/>
        <MemeGenerator />
      </header>
    </div>
  );
}

export default App;
