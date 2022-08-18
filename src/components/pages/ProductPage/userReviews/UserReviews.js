import useFetch from "../../../../utility/useFetch"

const UserReviews = () => {
    const {data, loading, error} = useFetch("http://localhost:5000/product_comment/get_all")

    console.log(data);
    console.log(loading);
    console.log(error);

    return(
        <div>
            
        </div>
    )
}

export default UserReviews