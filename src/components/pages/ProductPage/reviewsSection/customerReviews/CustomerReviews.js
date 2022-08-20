import DefaultSpinner from "../../../../../utility/DefaultSpinner";
import useFetch from "../../../../../utility/useFetch";
import CustomerReview from "./CustomerReview";

const CustomerReviews = (props) => {
    const {data, loading, error} = useFetch("http://localhost:5000/user/get_current");

    if (error) console.log(error);

    if (loading) {
        return(
            <DefaultSpinner/>
        )
    }

    if (data){
        return(
            <div className="container">
                {props.data.map((comment) => <CustomerReview key={comment.id}
                currentUser={data.username}
                author={comment.userDTO.username}
                title={comment.title} 
                body={comment.body}
                rating={comment.rating}
                created={comment.createDate}
                modified={comment.modifyDate}/>)}
            </div>
        )
    }
}

export default CustomerReviews;