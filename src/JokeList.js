import {useState, useEffect} from 'react';
import Joke from './Joke';
import axios from "axios";

const JokeList = ({length}) => {
    //set jokes array in state
    const [jokes, setJokes] = useState([]);

    useEffect(function() {
        async function getJokes() {
            try {
                    const resp = (await axios.get(`https://icanhazdadjoke.com`, {
                        headers: { Accept: "application/json" }
                    })).data.joke;
                    console.log(jokes);
                    setJokes(j => [...j, resp]);

            } catch (error) {
                console.log(error);
            }
        }
        if(jokes.length < length) {
            getJokes()
        }
    }, [jokes, setJokes])

    function newJokes() {
        setJokes([]);
    }

    return(
        <div>
            <button onClick={newJokes}>New Jokes</button>
            {jokes.map(j => <Joke text={j}/>)}
        </div>
    )
}

JokeList.defaultProps = {
    length: 10
};

export default JokeList