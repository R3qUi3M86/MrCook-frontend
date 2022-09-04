import RecipeCard from "./recipeCard/RecipeCard"

const RecipeCards = ({recipes, userDetails}) => {
    console.log(recipes);
    return(
        <div className="row">
            {recipes.map((recipe) => <RecipeCard key={recipe.id} userDetails={userDetails} recipe={recipe}/>)}
        </div>
    )
}

export default RecipeCards