import {useState, useEffect} from 'react';
import Joke from './Joke';
import axios from "axios";

const JokeList = ({length}) => {
    //set jokes array in state
    const [jokes, setJokes] = useState([]);

    //ok, now here's where things get crazy. this is when i'm going to have to use useEffect. blugh!

    //to begin, we'll just try it with 
}

JokeList.defaultProps = {
    length: 1
};

export default JokeList