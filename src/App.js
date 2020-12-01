import logo from './logo.svg';
import React from "react";
import { uuid } from 'uuidv4';
import './App.css';
import Joke from './Joke';
import JokeList from './JokeList';

function App() {
  return (
    <div className="App">
      <ul>
        <JokeList/>
      </ul>
    </div>
  );
}

export default App;
