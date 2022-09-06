import './recipeCard.css';
import FavouriteButton from './buttons/FavouriteButton';
import GridLayerIngredients from '../../../../../utility/cookingBoard/GridLayerIngredients';
import { BsHandThumbsUp, BsHandThumbsUpFill, BsHandThumbsDown, BsHandThumbsDownFill } from "react-icons/bs"
import { useState } from 'react';
import axios from 'axios';

const iconsPath = process.env.PUBLIC_URL + '/images/filter_icons/';
const veganIcon = iconsPath + 'vegan.png';
const vegetarianIcon = iconsPath + 'vegetarian.png';
const meatIcon = iconsPath + 'meat.png';
const fishIcon = iconsPath + 'fish.png';
const glutenIcon = iconsPath + 'gluten.png';
const lowFatIcon = iconsPath + 'low_fat.png';
const lowCarbIcon = iconsPath + 'low_carb.png';
const hiProteinIcon = iconsPath + 'hi_protein.png';
const voteTypes = {
    up: "UP",
    down: "DOWN"
}

const RecipeCard = ({recipe, userDetails, jwt, setJwt}) => {

    const [recipeVoted, setRecipeVoted] = useState(updateRecipeVotedByCurrentUser());
    const [rating, setRating] = useState(calculateRating());
    const createTime = recipe.createDate.replace("T", " ").substr(0, 10);
    const modifiedTime = recipe.modifyDate.replace("T", " ").substr(0, 10);
    const upVoteUrl = `${process.env.REACT_APP_BACKEND_URL}/recipes/up_vote/${recipe.id}`;
    const downVoteUrl = `${process.env.REACT_APP_BACKEND_URL}/recipes/down_vote/${recipe.id}`;


    function castVote(vote){
        let targetUrl;
        if (vote === voteTypes.up){
            recipeVoted === voteTypes.down ? setRecipeVoted(false) : setRecipeVoted(voteTypes.up);
            targetUrl = upVoteUrl;
            setRating(rating + 1);
        } else {
            recipeVoted === voteTypes.up ? setRecipeVoted(false) : setRecipeVoted(voteTypes.down)
            targetUrl = downVoteUrl;
            setRating(rating - 1);
        }

        axios
            .post(targetUrl, null, {headers:{
                'Authorization': `Bearer ${jwt}`
            }})
            .then()
            .catch((err) => {
            if (err.request.status === 401){
                console.log(err);
            }
        });
    }

    function calculateRating(){
        let rating = 0;
        recipe.recipeVotes.forEach(element => {
            element.voteType === voteTypes.up ? rating += 1 :  rating -= 1;
        });
        return rating;
    }

    function updateRecipeVotedByCurrentUser(){
        for(let vote of recipe.recipeVotes){
            if (vote.userId === userDetails.id){
                return vote.voteType;
            }
        }
    }

    return(
        <div className="col-lg-6" >
            <div className="card d-flex flex-grow-1 mb-2 justify-content-center">
                <div className="d-flex card-header border-0 justify-content-between recipe-card-title">
                    <p className="text-light short-recipe-title mb-0 pe-3 fw-bold">{recipe.title}</p>
                    <FavouriteButton uid={userDetails.id} favList={recipe.recipeFavourites} rid={recipe.id}/>
                </div>
                
                <div className="card-body px-0 py-0 position-relative">
                    <div className="adaptive-recipes-bg board-bg"/>
                    <GridLayerIngredients/>
                </div>
                
                <div className="card-footer border-0">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-grow-1 recipe-author mb-0">by: {recipe.author}</div>
                        <div className="d-flex justify-content-end">
                            {recipe.vegan ? <img src={veganIcon} className="icon-small" alt="Vegan icon"/> : <></>}
                            {recipe.vegetarian ? <img src={vegetarianIcon} className="icon-small ms-1" alt="Vegetarian icon"/> : <></>}
                            {recipe.carnivore ? <img src={meatIcon} className="icon-small" alt="Meat icon"/> : <></>}
                            {recipe.fish ? <img src={fishIcon} className="icon-small" alt="Fish icon"/> : <></>}
                            {recipe.gluten ? <></> : <img src={glutenIcon} className="icon-small ms-1" alt="Gluten icon"/>}
                            {recipe.lowFat ? <img src={lowFatIcon} className="icon-small" alt="Fat icon"/> : <></>}
                            {recipe.lowCarbs ? <img src={lowCarbIcon} className="icon-small" alt="Carbs icon"/> : <></>}
                            {recipe.hiProtein ? <img src={hiProteinIcon} className="icon-small" alt="Protein icon"/> : <></>}
                        </div>
                    </div>
                    
                    <div className="d-flex justify-content-between pt-1">
                        {recipe.createDate === recipe.modifyDate ? <div className="quote-text-recipe-footer text-recipe-footer mb-0">Created: {createTime}</div> :
                        <div className="quote-text-recipe-footer text-recipe-footer mb-0">Updated: {modifiedTime}</div>}
                        <div className="d-flex justify-content-end text-recipe-footer fw-bold">
                            <p className="mb-0">{recipe.calories}kcal &nbsp;</p>
                            <p className="mb-0 protein-text-color">p: {Math.round(recipe.protein)}g &nbsp;</p>
                            <p className="mb-0 fat-text-color">f: {Math.round(recipe.fat)}g &nbsp;</p>
                            <p className="mb-0 carbs-text-color">c: {Math.round(recipe.carbs)}g</p>
                        </div>
                    </div>
                    
                    <div className="d-flex justify-content-between text-recipe-footer pt-1">
                        <div className="d-flex justify-content-end pt-3">Comments: {recipe.recipeComments.length}</div>
                        <div className="d-flex justify-content-end">
                            <div className="pt-1 pe-2">
                                { userDetails.id && userDetails.username !==recipe.author ? (
                                    !recipeVoted || recipeVoted === voteTypes.down ? 
                                    <BsHandThumbsUp className='positive-rating-color text-recipe-footer2 clickable' onClick={()=>castVote(voteTypes.up)}/> : 
                                    <BsHandThumbsUpFill className='positive-rating-color text-recipe-footer2'/>
                                ) : <></>}
                            </div>
                            <span className={rating === 0 ?  "fw-bold rating text-recipe-footer2" : 
                                            rating > 0 ? "fw-bold rating positive-rating-color text-recipe-footer2" : 
                                            "fw-bold rating negative-rating-color text-recipe-footer2"}>{rating}</span>
                            <div className="pt-2 ps-2 mt-1">
                                { userDetails.id && userDetails.username !==recipe.author ? (
                                    !recipeVoted || recipeVoted === voteTypes.up ? 
                                    <BsHandThumbsDown className='negative-rating-color text-recipe-footer2 clickable' onClick={()=>castVote(voteTypes.down)}/> : 
                                    <BsHandThumbsDownFill className='negative-rating-color text-recipe-footer2'/>
                                ) : <></>}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;