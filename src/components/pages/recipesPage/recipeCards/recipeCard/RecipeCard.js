import './recipeCard.css';
import {BsHeart, BsHeartFill} from "react-icons/bs";

const RecipeCard = ({recipe, userDetails}) => {
    function addToFavourites(){
        //need to implement
    }

    return(
        <div>
            <div className="card d-flex flex-grow-1 mb-2 justify-content-center">
                <div className="d-flex card-header border-0 justify-content-between recipe-card-title">
                    <p className="text-light short-recipe-title mb-0 pe-3">{recipe.title}</p>
                    {userDetails.id ? <div onClick={()=>addToFavourites()}><BsHeart className="heart mb-1"/></div> : <></>/*Check if in favourites*/} 
                </div>
                <div className="card-body">
                    {/* <div className="input-group mb-3">
                        <span className="input-group-text" style={{backgroundColor: "#ce7432"}}>
                            <MdAlternateEmail className="text-light"/>
                        </span>
                        <input type="email" className={badCredentials? "form-control is-invalid" : "form-control"} placeholder="Email" onChange={(e) => updateEmailField(e)} />
                    </div>
                    <div className="input-group mb-1">
                        <span className="input-group-text" style={{backgroundColor: "#ce7432"}}>
                            <FaKey className="text-light"/>
                        </span>
                        <input type="password" className={badCredentials? "form-control is-invalid" : "form-control"} placeholder="Password" onChange={(e) => updatePasswordField(e)} />
                    </div>
                    {badCredentials? (<div className="d-flex justify-content-center small text-danger">Invalid user email and/or password</div>):<></>}
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-secondary fs-5 px-4 mt-3" onClick={login}>Login</button>
                    </div> */}
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