import useFetch from "../../../../utility/useFetch"
import { Fragment, useState } from "react";
import { IconContext } from "react-icons";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const UserReviews = () => {
    const {data, loading, error} = useFetch("http://localhost:5000/product_comment/get_all");
    const [rating, setRating] = useState({
        avgRating: undefined,
        fullStars: undefined,
        halfStar: undefined,
        emptyStars: undefined
    });
    
    console.log(data); //Remove this

    function calculateRating(){
        const ratingArr = data.map((element) => element["rating"]);
        const avg = (ratingArr.reduce((a, b) => a + b, 0) / ratingArr.length).toFixed(2);
        let fullStarsCount = Math.floor(avg);
        const isHalfStar = ((avg - fullStarsCount) > 0.2 && (avg - fullStarsCount) < 0.7);
        if (!isHalfStar && (avg - fullStarsCount) >= 0.7) fullStarsCount++
        const emptyStarsCount = isHalfStar ? 4 - fullStarsCount : 5 - fullStarsCount;

        console.log(fullStarsCount);
        console.log(isHalfStar);
        console.log(emptyStarsCount);

        setRating({
            avgRating: avg,
            fullStars: fullStarsCount,
            halfStar: isHalfStar,
            emptyStars: emptyStarsCount
        });
    }

    if (error) console.log(error);

    if (loading) {
        return(
            <div className="text-center">
                <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (data) {
        if (!rating.avgRating) {
            calculateRating();
        }

        return(
            <section className="section pt-2 pt-md-5">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="col-12 col-md-3">
                            <div className="text-center py-3">
                                <IconContext.Provider value={{color: "gold", style: {margin: "1px"}}}>
                                    {[...Array(rating.fullStars)].map((elem, index) => <BsStarFill key={index} className="mainStarRating"/>)}
                                    {rating.halfStar ? <BsStarHalf className="mainStarRating"/> : <Fragment/>}
                                    {[...Array(rating.emptyStars)].map((elem, index) => <BsStar key={index} className="mainStarRating"/>)}
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <p className="quoteText">Customers Rating: {rating.avgRating}</p>
                    </div>
                    <div className="row text-center">
                        <p className="mainSectionTitle mb-0">Customer Experience</p>
                        <div className="d-flex justify-content-center">
                            <div className="underline col-1 align-self-center"></div>
                        </div>
                        <p className="quoteText">"Share your thoughts with us!"</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default UserReviews