import './recipeCard.css';
import FavouriteButton from './buttons/FavouriteButton';
import GridLayerIngredients from '../../../../../utility/cookingBoard/GridLayerIngredients';

const RecipeCard = ({recipe, userDetails}) => {
    return(
        <div className="col-lg-6" >
            <div className="card d-flex flex-grow-1 mb-2 justify-content-center">
                <div className="d-flex card-header border-0 justify-content-between recipe-card-title">
                    <p className="text-light short-recipe-title mb-0 pe-3">{recipe.title}</p>
                    <FavouriteButton uid={userDetails.id} favList={recipe.recipeFavourites} rid={recipe.id}/>
                </div>
                <div className="card-body px-0 py-0 position-relative">
                    <div className="adaptive-recipes-bg board-bg"/>
                    <GridLayerIngredients/>
                </div>
                <div className="card-footer border-0 disable-additional-alpha">
                    {/* <div className="d-flex justify-content-center quote-text">
                        Don't have an account?&nbsp;<a href="/register">Sign Up</a>
                    </div>
                    <div className="d-flex justify-content-center quote-text">
                        <a href="/register">Forgot your password?</a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;