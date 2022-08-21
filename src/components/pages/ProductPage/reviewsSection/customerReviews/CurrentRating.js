import { BsStarFill, BsStar } from "react-icons/bs";
import { IconContext } from 'react-icons';

const CurrentRating = (props) => {
    return(
        <IconContext.Provider value={{color: "gold", style: {margin: "1px"}}}>
            {[...Array(props.rating)].map((elem, index) => <BsStarFill key={index} />)}
            {[...Array(5- props.rating)].map((elem, index) => <BsStar key={index} />)}
        </IconContext.Provider>
    )
}

export default CurrentRating;
