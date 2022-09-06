import axios from 'axios';
import { useEffect, useState } from "react";
import {BsHeart, BsHeartFill} from "react-icons/bs";
import useLocalStorage from '../../../../../../utility/useLocalStorage';

const FavouriteButton = ({uid, favList, rid}) => {
    const [jwt] = useLocalStorage("", "jwt")
    const [favourite, setFavourite] = useState(false);

    const urlAddFav = `${process.env.REACT_APP_BACKEND_URL}/recipes/add_favourite/${rid}`;
    const urlRemoveFav = `${process.env.REACT_APP_BACKEND_URL}/recipes/remove_favourite/${rid}`;

    function addToFavourites(){
        setFavourite(true);
        axios
            .post(urlAddFav, null, {headers:{'Authorization': `Bearer ${jwt}`}})
            .then()
            .catch((err) => {
                console.log(err)
                setFavourite(false);
            });
    }

    function removeFromFavourites(){
        setFavourite(false);
        axios
            .post(urlRemoveFav, null, {headers:{'Authorization': `Bearer ${jwt}`}})
            .then()
            .catch((err) => {
                console.log(err)
                setFavourite(true);
            });
    }

    useEffect(() => {
        for (let fav of favList){
            if(fav.userId === uid) setFavourite(true);
        }
    },[favList, uid])

    return(
        <>
            {uid ?
                favourite ?
                    <div className="clickable" onClick={()=>removeFromFavourites()}>
                        <BsHeartFill className="heart mb-1"/>
                    </div> : 
                <div className="clickable" onClick={()=>addToFavourites()}>
                    <BsHeart className="heart mb-1"/>
                </div> : 
            <></>}
        </>
    )
}

export default FavouriteButton;