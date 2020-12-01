import logo from './logo.svg';
import React from "react";

import './App.css';
import Joke from './Joke';

function App() {
  return (
    <div className="App">
      <ul>
        <Joke text='Hello'/>
      </ul>
    </div>
  );
}

export default App;
