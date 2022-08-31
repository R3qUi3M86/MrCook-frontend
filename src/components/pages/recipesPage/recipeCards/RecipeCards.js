import RecipeCard from "./recipeCard/RecipeCard"

const RecipeCards = ({recipes, userDetails}) => {
    console.log(recipes);
    return(
        <>
            {recipes.map((recipe) => <RecipeCard key={recipe.id} userDetails={userDetails} recipe={recipe}/>)}
        </>
    )
}

export default RecipeCards