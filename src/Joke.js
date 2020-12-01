// First thing we're going to do is 	build Joke.js and JokeList.js.

// Joke.js is a pretty simple component.

// 2 states (like, dislike) both bools. That means we'll need to pass in some function props. handleLike, handleDislike and pass em in to the buttons. As arrow funcs!

// And then the text should be passed in as prop too.

import {useState} from 'react';

const Joke = (handleLike, handleDislike, text) => {
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);

	function handleLike() {
		setLike(true)
		setDislike(false)
	}

	function handleDislike() {
		setDislike(true)
		setLike(false)
    }

    let color;

	if(!like && !dislike) {
		color='black'
	} else if(like) {
		color='green'
	} else {
		color='red'
	}

	return(
        <li>
            <button onClick={()=>handleDislike()}>Dislike</button>
            <button onClick={() =>handleLike()}>Like</button>
            <p style={{color:color}}>{text}</p>
        </li>
    )
}

export default Joke;