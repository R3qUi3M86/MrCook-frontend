import React, { useState } from 'react';
import DefaultSpinner from '../../utility/DefaultSpinner';
import useFetch from '../../utility/useFetch';
import NoRecipesFound from './recipesPage/recipeCards/NoRecipesFound';
import RecipeCards from './recipesPage/recipeCards/RecipeCards';
import SearchBar from './recipesPage/searchBar/SearchBar';

const getAllRecipesUrl = `${process.env.REACT_APP_BACKEND_URL}/recipes/get_all`;

const RecipesPage = ({userDetails, jwt, setJwt}) => {
    const [recipes, setRecipes] = useState(null);
    const {data, status, loading, error } = useFetch(getAllRecipesUrl);

    if (error) console.log(error);

    if (status===200 && data && !recipes) setRecipes(data);
    
    return (
        <div className="container">
            <div className="d-flex flex-column h-100 position-relative">
                <div className="pt-5"/>
                <SearchBar/>
                    {loading ? <DefaultSpinner/> : 
                    recipes && recipes.length > 0 ? <RecipeCards recipes={recipes} userDetails={userDetails} jwt={jwt} setJwt={setJwt}/> : <NoRecipesFound/>}
            </div>
        </div>
    );
}

export default RecipesPage;