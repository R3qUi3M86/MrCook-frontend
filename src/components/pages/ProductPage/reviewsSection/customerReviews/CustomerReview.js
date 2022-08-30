import './customerReview.css';
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";
import { Fragment, useState } from 'react';
import CurrentRating from './CurrentRating';
import SetRating from './SetRating';
import axios from 'axios';
import useLocalStorage from '../../../../../utility/useLocalStorage';

const CustomerReview = (props) => {
    const urlUpdate = "http://localhost:5000/product_comment/update";
    const urlDelete = `http://localhost:5000/product_comment/delete/${props.id}`;
    const [jwt] = useLocalStorage("", "jwt");
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

    function deleteReview(){
        axios
            .delete(urlDelete, {headers:{'Authorization': `Bearer ${jwt}`}})
            .then((response) => {
                props.setUserDetails(response.data);
                props.reloadCallback();
            })
            .catch((err) => {
                console.log(err)
            });
    }

    function updateReview(){
        axios
            .put(urlUpdate, commentData, {headers:{'Authorization': `Bearer ${jwt}`}})
            .then(() => {
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

    const createTime = props.created.replace("T", " ").substr(0, 19);
    const modifiedTime = props.modified.replace("T", " ").substr(0, 19);

    return(
        <div className="py-4">
            <div className="d-flex justify-content-between">
                <p className="product-review-author fw-bold my-0">{props.author} :</p>
                {props.userDetails.roles === "ADMIN" && props.userDetails.username !== props.author && !edit ?
                <div>
                    <BsTrashFill className="delete-review-btn mt-2 me-2" onClick={() => deleteReview()}/>
                </div> :
                <Fragment/>}
                {props.userDetails.username === props.author && !edit ? 
                <div>
                    <BsTrashFill className="delete-review-btn mt-2 me-2" onClick={() => deleteReview()}/>
                    <BsPencilSquare className="edit-review-btn mt-2" onClick={() => editReview()}/>
                </div> :
                <Fragment/>}
            </div>
            <div className="d-flex justify-content-between">
                {edit ? <input className="form-control form-control-sm me-5" placeholder="Your review title..." type="text" defaultValue={props.title} onChange={(e) => updateReviewTitle(e)} aria-label=".form-control-sm example"/> : <p className="fw-bold my-0">{props.title}</p>}
                <div className="d-flex pt-1">
                    {edit ? <SetRating rating={props.rating} callback={updateRating}/> : <CurrentRating rating={props.rating}/>}
                </div>
            </div>
            <hr className="orange my-2"/>
            {edit ? <textarea className="form-control form-control-sm" rows="3" placeholder="Your review description..." defaultValue={props.body} onChange={(e) => updateReviewBody(e)}/> : <p className="quote-text">{props.body}</p>}
            <div className="d-flex justify-content-between">
                <p className="small quote-text">Added: {createTime}</p>
                {edit ? <button className="btn btn-outline-secondary mt-1 py-0" disabled={saveDisabled} onClick={() => updateReview()}>Save</button> : <Fragment/>}
                {!edit && props.created !== props.modified ? <p className="small quote-text">Modified: {modifiedTime}</p> : <Fragment/>}
            </div>
        </div>
    )
}

export default CustomerReview;