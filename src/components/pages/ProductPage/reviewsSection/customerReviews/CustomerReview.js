import './customerReview.css';
import { BsPencilSquare } from "react-icons/bs";
import { Fragment, useState } from 'react';
import CurrentRating from './CurrentRating';
import SetRating from './SetRating';
import useFetch from '../../../../../utility/useFetch';


const CustomerReview = (props) => {
    const [edit, setEdit] = useState(false);

    function editReview(){
        setEdit(true);
    }

    function updateReview(){
        console.log(commentData)
        // const {data, loading, error} = useFetch("http://localhost:5000/product_comment/get_all", "PUT", commentData);
        setEdit(false)
    }

    const commentData = {
        id: props.id,
        title: props.title,
        body: props.body,
        rating: 5
    }

    function updateRating(rating){
        commentData.rating = rating;
    }

    const createTime = props.created.replace("T", " ").substr(0, 19);
    const modifiedTime = props.created.replace("T", " ").substr(0, 19);

    return(
        <div className="py-4">
            <div className="d-flex justify-content-between">
                <p className="product-review-author fw-bold my-0">{props.author} :</p>
                {props.currentUser === props.author && !edit ? <BsPencilSquare className="edit-review-btn mt-2" onClick={() => editReview()}/> : <Fragment/>}
            </div>
            <div className="d-flex justify-content-between">
                {edit ? <input className="form-control form-control-sm me-5" type="text" placeholder={props.title} onChange={(e) => commentData.title = e.target.value} aria-label=".form-control-sm example"/> : <p className="fw-bold my-0">{props.title}</p>}
                <div className="d-flex pt-1">
                    {edit ? <SetRating rating={props.rating} callback={updateRating}/> : <CurrentRating rating={props.rating}/>}
                </div>
            </div>
            <hr className="orange my-2"/>
            {edit ? <textarea className="form-control form-control-sm" placeholder={props.body} rows="3" onChange={(e) => commentData.body = e.target.value}/> : <p className="quote-text">{props.body}</p>}
            <div className="d-flex justify-content-between">
                <p className="small quote-text">Added: {createTime}</p>
                {edit ? <button className="btn btn-outline-secondary mt-1 py-0" onClick={() => updateReview()}>Save</button> : <Fragment/>}
                {!edit && props.created !== props.modified ? <p className="small quote-text">Modified: {modifiedTime}</p> : <Fragment/>}
            </div>
        </div>
    )
}

export default CustomerReview;