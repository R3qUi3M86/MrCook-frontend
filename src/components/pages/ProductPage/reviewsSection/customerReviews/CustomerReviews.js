import { Fragment } from "react";
import DefaultSpinner from "../../../../../utility/DefaultSpinner";
import useFetch from "../../../../../utility/useFetch";
import AddReview from "./AddReview";
import CustomerReview from "./CustomerReview";

const CustomerReviews = (props) => {
    const {data, status, loading, error} = useFetch("http://localhost:5000/user/get_current", "GET");

    if (error) console.log(error);

    if (loading) {
        return(
            <DefaultSpinner/>
        )
    }

    if (status===200 && data){
        
        return(
            <div className="container">
                <AddReview data={data} reloadCallback={props.reloadCallback}/>

                {props.data.map((comment) => data.username === comment.userDTO.username ? <CustomerReview key={comment.id}
                id={comment.id}
                currentUser={data.username}
                author={comment.userDTO.username}
                title={comment.title} 
                body={comment.body}
                rating={comment.rating}
                created={comment.createDate}
                modified={comment.modifyDate}
                reloadCallback={props.reloadCallback}/> : <Fragment key={comment.id}/>)}

                {props.data.map((comment) => data.username !== comment.userDTO.username ? <CustomerReview key={comment.id}
                currentUser={data.username}
                author={comment.userDTO.username}
                title={comment.title} 
                body={comment.body}
                rating={comment.rating}
                created={comment.createDate}
                modified={comment.modifyDate}/> : <Fragment key={comment.id}/>)}
            </div>
        )
    }
}

export default CustomerReviews;