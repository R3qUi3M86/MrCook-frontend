import { Fragment } from "react";
import AddReview from "./AddReview";
import CustomerReview from "./CustomerReview";

const CustomerReviews = ({data, reloadCallback, userDetails, setUserDetails}) => {
    function putUserCommentFirst() {
        if (userDetails.id && userDetails.productComment){
            for (let comment of data){
                if (comment.username === userDetails.username){
                    data.sort(function(x,y){ return x === comment ? -1 : y === comment ? 1 : 0; });
                    return;
                }
            }
        }
    }

    putUserCommentFirst();

    return(
        <div className="container">
            {(userDetails.banned) ? <Fragment/> : <AddReview data={userDetails} reloadCallback={reloadCallback} setUserDetails={setUserDetails} />}

            {data.map((comment) => <CustomerReview key={comment.id}
            id={comment.id}
            userDetails={userDetails}
            author={comment.username}
            title={comment.title} 
            body={comment.body}
            rating={comment.rating}
            created={comment.createDate}
            modified={comment.modifyDate}
            setUserDetails={setUserDetails}
            reloadCallback={reloadCallback}/>)}
        </div>
    )
}

export default CustomerReviews;