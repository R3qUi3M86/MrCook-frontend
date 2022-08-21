import './customerReview.css';
import { useState } from 'react';
import SetRating from './SetRating';
import axios from 'axios';

const AddReview = ({data, reloadCallback}) => {
    const url = "http://localhost:5000/product_comment/add"
    const [saveDisabled, setSaveDisabled] = useState(false);
    const [commentData, setCommentData] = useState({
        title: "",
        body: "",
        rating: 5
    });

    function addNewReview(){
        console.log(commentData)
        axios
            .post(url, commentData)
            .then((response) => {
                reloadCallback();
            })
            .catch((err) => {
                console.log(err)
            });
    }

    function updateRating(rating){
        commentData.rating = rating;
    }

    function updateReviewBody(e){
        commentData.body = e.target.value;
        setCommentData(commentData);
        if ((commentData.body.length === 0 && !saveDisabled) || (commentData.body.length > 500 && !saveDisabled)){
            setSaveDisabled(true)
        }
        if (commentData.body.length !== 0 && commentData.body.length <= 500 && saveDisabled){
            setSaveDisabled(false)
        }
    }

    function updateReviewTitle(e){
        commentData.title = e.target.value;
        setCommentData(commentData);
        if ((commentData.title.length === 0 && !saveDisabled) || (commentData.title.length > 255 && !saveDisabled)){
            setSaveDisabled(true)
        }
        if (commentData.title.length !== 0 && commentData.title.length <= 255 && saveDisabled){
            setSaveDisabled(false)
        }
    }
    if (!data.username || !data.member){
        return(
            <div className="text-center py-3">
                <p className="quote-text orange">You have to be logged in member to leave review</p>
            </div>
        )
    }


    if (data.username && data.member && !data.productComment){
        console.log(data)
        return(
            <div className="py-4">
                <div className="d-flex">
                    <p className="product-review-author fw-bold my-0">{data.username} :</p>
                </div>
                <div className="d-flex justify-content-between">
                    <input className="form-control form-control-sm me-5" type="text" placeholder="Your review title..." onChange={(e) => updateReviewTitle(e)} aria-label=".form-control-sm example"/>
                    <div className="d-flex pt-1">
                        <SetRating rating={commentData.rating} callback={updateRating}/>
                    </div>
                </div>
                <hr className="orange my-2"/>
                <textarea className="form-control form-control-sm" rows="3" placeholder="Your review description..." onChange={(e) => updateReviewBody(e)}/>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-secondary mt-1 py-0" disabled={saveDisabled} onClick={() => addNewReview()}>Save</button>
                </div>
            </div>
        )
    }
}

export default AddReview;