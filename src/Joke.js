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