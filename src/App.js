import logo from './logo.svg';
import React from "react";
import { uuid } from 'uuidv4';

import './App.css';
import Joke from './Joke';

function App() {
  return (
    <div className="App">
      <ul>
        <Joke text='Hello' key={uuid()}/>
      </ul>
    </div>
  );
}

export default App;
