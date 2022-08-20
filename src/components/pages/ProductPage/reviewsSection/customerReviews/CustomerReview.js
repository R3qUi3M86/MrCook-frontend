import './customerReview.css';
import { BsPencilSquare, BsStarFill, BsStar } from "react-icons/bs";
import { Fragment } from 'react';
import { IconContext } from 'react-icons';


const CustomerReview = (props) => {
    function editReview(){
        console.log("editing")
    }

    const createTime = props.created.replace("T", " ").substr(0, 19);
    const modifiedTime = props.created.replace("T", " ").substr(0, 19);

    console.log(props.modified)

    return(
        <div className="py-4">
            <div className="d-flex justify-content-between">
                <p className="product-review-author fw-bold my-0">{props.author} :</p>
                {props.currentUser === props.author ? <BsPencilSquare className="edit-review-btn mt-2" onClick={() => editReview()}/> : <Fragment/>}
            </div>
            <div className="d-flex justify-content-between">
                <p className="fw-bold my-0">{props.title}</p>
                <div>
                    <IconContext.Provider value={{color: "gold", style: {margin: "1px"}}}>
                        {[...Array(props.rating)].map((elem, index) => <BsStarFill key={index} />)}
                        {[...Array(5- props.rating)].map((elem, index) => <BsStar key={index} />)}
                    </IconContext.Provider>
                </div>
            </div>
            <hr className="orange my-2"/>
            <p className="quote-text">{props.body}</p>
            <div className="d-flex justify-content-between">
                <p className="small quote-text">Added: {createTime}</p>
                {props.created !== props.modified ? <p className="small quote-text">Modified: {modifiedTime}</p> : <Fragment/>}
            </div>
        </div>
    )
}

export default CustomerReview;

// author={comment.userDTO.username}
// title={comment.title} 
// body={comment.body}
// rating={comment.rating}
// created={comment.createDate}
// modified={comment.modifyDate}/>)}