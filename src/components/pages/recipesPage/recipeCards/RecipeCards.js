import RecipeCard from "./recipeCard/RecipeCard"

const RecipeCards = ({recipes, userDetails, jwt, setJwt}) => {
    console.log(recipes);
    return(
        <div className="row">
            {recipes.map((recipe) => <RecipeCard key={recipe.id} userDetails={userDetails} recipe={recipe} setJwt={setJwt} jwt={jwt}/>)}
        </div>
    )
}

export default RecipeCards