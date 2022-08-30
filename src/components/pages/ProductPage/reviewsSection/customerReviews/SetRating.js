import { BsStarFill, BsStar } from "react-icons/bs";
import { IconContext } from 'react-icons';
import { useState } from "react";

const SetRating = (props) => {
    const [tempRating, setTempRating] = useState(props.rating);
    const [rating, setRating] = useState(props.rating);

    function setNewRating(tempRating){
        props.callback(tempRating);
        setRating(tempRating);
    }

    function updateTempStarDisplay(fullStarsCount){
        if (tempRating !== fullStarsCount){
            setTempRating(fullStarsCount)
        }
    }

    return(
        <IconContext.Provider value={{color: "gold", style: {margin: "1px"}}}>
            {[...Array(5)].map((elem, index) => (index < tempRating ? 
            <BsStarFill key={index} onMouseEnter={() => updateTempStarDisplay(index+1)} onMouseLeave={() => setTempRating(rating)} onClick={() => setNewRating(tempRating)}/> : 
            <BsStar key={index} onMouseEnter={() => updateTempStarDisplay(index+1)} onMouseLeave={() => setTempRating(rating)}/>))}
        </IconContext.Provider>
    )
}

export default SetRating;