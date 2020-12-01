import {useState} from 'react';
import "./Joke.css";

const Joke = ({handleLike, handleDislike, text}) => {
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

    function handleNeutral() {
        setDislike(false);
        setLike(false);
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
        <div id='joke'>
            <button onClick={()=>handleDislike()}>Dislike</button>
                <p onClick={()=>handleNeutral()} style={{color:color}}>{text}</p>
            <button onClick={() =>handleLike()}>Like</button>
        </div>
    )
}

export default Joke;