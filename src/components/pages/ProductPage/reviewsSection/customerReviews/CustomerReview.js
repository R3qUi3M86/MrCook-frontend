import './customerReview.css';
import { BsPencilSquare } from "react-icons/bs";
import { Fragment, useState } from 'react';
import CurrentRating from './CurrentRating';
import SetRating from './SetRating';
import axios from 'axios';

const CustomerReview = (props) => {
    const url = "http://localhost:5000/product_comment/update"
    const [edit, setEdit] = useState(false);
    const [saveDisabled, setSaveDisabled] = useState(false);
    const [commentData, setCommentData] = useState({
        id: props.id,
        title: props.title,
        body: props.body,
        rating: props.rating
    });

    function editReview(){
        setEdit(true);
    }

    function updateReview(){
        console.log(commentData)
        axios
            .put(url, commentData)
            .then((response) => {
                props.reloadCallback();
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

    const createTime = props.created.replace("T", " ").substr(0, 19);
    const modifiedTime = props.modified.replace("T", " ").substr(0, 19);

    return(
        <div className="py-4">
            <div className="d-flex justify-content-between">
                <p className="product-review-author fw-bold my-0">{props.author} :</p>
                {props.currentUser === props.author && !edit ? <BsPencilSquare className="edit-review-btn mt-2" onClick={() => editReview()}/> : <Fragment/>}
            </div>
            <div className="d-flex justify-content-between">
                {edit ? <input className="form-control form-control-sm me-5" type="text" defaultValue={props.title} onChange={(e) => updateReviewTitle(e)} aria-label=".form-control-sm example"/> : <p className="fw-bold my-0">{props.title}</p>}
                <div className="d-flex pt-1">
                    {edit ? <SetRating rating={props.rating} callback={updateRating}/> : <CurrentRating rating={props.rating}/>}
                </div>
            </div>
            <hr className="orange my-2"/>
            {edit ? <textarea className="form-control form-control-sm" rows="3" defaultValue={props.body} onChange={(e) => updateReviewBody(e)}/> : <p className="quote-text">{props.body}</p>}
            <div className="d-flex justify-content-between">
                <p className="small quote-text">Added: {createTime}</p>
                {edit ? <button className="btn btn-outline-secondary mt-1 py-0" disabled={saveDisabled} onClick={() => updateReview()}>Save</button> : <Fragment/>}
                {!edit && props.created !== props.modified ? <p className="small quote-text">Modified: {modifiedTime}</p> : <Fragment/>}
            </div>
        </div>
    )
}

export default CustomerReview;