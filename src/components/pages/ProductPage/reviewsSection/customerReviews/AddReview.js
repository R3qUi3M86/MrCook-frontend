import './customerReview.css';
import { useState } from 'react';
import SetRating from './SetRating';
import axios from 'axios';
import useLocalStorage from '../../../../../utility/useLocalStorage';

const AddReview = ({data, reloadCallback, setUserDetails}) => {
    const url = "http://localhost:5000/product_comment/add"
    const [jwt] = useLocalStorage("", "jwt");
    const [saveDisabled, setSaveDisabled] = useState(true);
    const [commentData, setCommentData] = useState({
        title: "",
        body: "",
        rating: 5
    });

    function addNewReview(){
        console.log(commentData)
        axios
            .post(url, commentData, {headers:{'Authorization': `Bearer ${jwt}`}})
            .then((response) => {
                setUserDetails(response.data);
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
        setSaveButton();
    }

    function updateReviewTitle(e){
        commentData.title = e.target.value;
        setCommentData(commentData);
        setSaveButton();
    }

    function setSaveButton(){
        if ((commentData.title.length === 0 || commentData.title.length > 255 ||
            commentData.body.length === 0 || commentData.body.length > 500) && !saveDisabled){
            setSaveDisabled(true)
        } else if (commentData.title.length !== 0 && commentData.title.length <= 255 &&
            commentData.body.length !== 0 && commentData.body.length <= 500 && saveDisabled){
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

        return(
            <div className="py-4">
                <div className="d-flex">
                    <p className="product-review-author fw-bold my-0">{data.username} :</p>
                </div>
                <div className="d-flex justify-content-between">
                    <input className="form-control form-control-sm me-5" type="text" placeholder="Your review title..." onChange={(e) => updateReviewTitle(e)}/>
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