import { Fragment } from "react";
import AddReview from "./AddReview";
import CustomerReview from "./CustomerReview";

const CustomerReviews = ({data, reloadCallback, userDetails}) => {

    return(
        <div className="container">
            {(userDetails.banned) ? <Fragment/> : <AddReview data={userDetails} reloadCallback={reloadCallback}/>}

            {data.map((comment) => userDetails.username === comment.userDTO.username ? <CustomerReview key={comment.id}
            id={comment.id}
            currentUser={userDetails.username}
            author={comment.userDTO.username}
            title={comment.title} 
            body={comment.body}
            rating={comment.rating}
            created={comment.createDate}
            modified={comment.modifyDate}
            reloadCallback={reloadCallback}/> : <Fragment key={comment.id}/>)}

            {data.map((comment) => userDetails.username !== comment.userDTO.username ? <CustomerReview key={comment.id}
            currentUser={userDetails.username}
            author={comment.userDTO.username}
            title={comment.title} 
            body={comment.body}
            rating={comment.rating}
            created={comment.createDate}
            modified={comment.modifyDate}/> : <Fragment key={comment.id}/>)}
        </div>
    )
}

export default CustomerReviews;