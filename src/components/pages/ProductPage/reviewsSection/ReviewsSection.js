import useFetch from "../../../../utility/useFetch"
import { Fragment, useState } from "react";
import { IconContext } from "react-icons";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import CustomerReviews from "./customerReviews/CustomerReviews";
import DefaultSpinner from "../../../../utility/DefaultSpinner";

const ReviewsSection = ({userDetails, setUserDetails}) => {
    const {data, status, loading, error, refetch} = useFetch("http://localhost:5000/product_comment/get_all");
    const [seed, setSeed] = useState(1);

    const reload = () => {
        refetch();
        let newSeed = Math.random();
        while (seed === newSeed) newSeed = Math.random();
        setSeed(newSeed);
    }

    let rating = {
        avgRating: 5,
        fullStars: 5,
        halfStar: false,
        emptyStars: 0
    }

    function calculateRating(){
        const ratingArr = data.map((element) => element["rating"]);
        const avg = (ratingArr.reduce((a, b) => a + b, 0) / ratingArr.length).toFixed(1);
        let fullStarsCount = Math.floor(avg);
        const isHalfStar = ((avg - fullStarsCount) > 0.2 && (avg - fullStarsCount) < 0.7);
        if (!isHalfStar && (avg - fullStarsCount) >= 0.7) fullStarsCount++
        const emptyStarsCount = isHalfStar ? 4 - fullStarsCount : 5 - fullStarsCount;

        rating = {
            avgRating: avg,
            fullStars: fullStarsCount,
            halfStar: isHalfStar,
            emptyStars: emptyStarsCount
        };
    }

    if (error) console.log(error);

    if (loading) {
        return(
            <DefaultSpinner/>
        )
    }

    if (status===200 && data) {
        if (data.length > 0) calculateRating();

        return(
            <section className="section pt-2 pt-md-5">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="col-12 col-md-3">
                            <div className="text-center py-3">
                                <IconContext.Provider value={{color: "gold", style: {margin: "1px"}}}>
                                    {[...Array(rating.fullStars)].map((elem, index) => <BsStarFill key={index} className="main-star-rating"/>)}
                                    {rating.halfStar ? <BsStarHalf className="main-star-rating"/> : <Fragment/>}
                                    {[...Array(rating.emptyStars)].map((elem, index) => <BsStar key={index} className="main-star-rating"/>)}
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <p className="quote-text">Customers Rating: {rating.avgRating}</p>
                    </div>
                    <div className="row text-center">
                        <p className="main-section-title mb-0">Customer Experience</p>
                        <div className="d-flex justify-content-center">
                            <div className="underline col-1 align-self-center"></div>
                        </div>
                        <p className="quote-text">"Share your thoughts with us!"</p>
                    </div>
                </div>
                <CustomerReviews data={data} reloadCallback={reload} userDetails={userDetails} setUserDetails={setUserDetails}/>
            </section>
        )
    }
}

export default ReviewsSection