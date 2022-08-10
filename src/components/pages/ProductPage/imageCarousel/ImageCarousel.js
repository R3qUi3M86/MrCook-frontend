import "./imageCarousel.css"

const path = process.env.PUBLIC_URL;
const bm01 = path + '/images/bm01.jpg'
const bm02 = path + '/images/bm02.jpg'
const bm03 = path + '/images/bm03.jpg'
const bm04 = path + '/images/bm04.jpg'
const bm05 = path + '/images/bm05.jpg'
const bm06 = path + '/images/bm06.jpg'

const ImageCarousel = () => {
    return(
        <div id="carouselContainer" className="d-flex justify-content-center shadow">
            <div id="mainImageCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#mainImageCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#mainImageCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#mainImageCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#mainImageCarousel" data-bs-slide-to="3" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#mainImageCarousel" data-bs-slide-to="4" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#mainImageCarousel" data-bs-slide-to="5" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={bm01} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <p className="carouselText">Fold MrCook - it's flexible!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bm02} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <p className="carouselText">Bake anything!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bm03} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <p className="carouselText">Enjoy your own, home-made bread!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bm04} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <p className="carouselText">Bread and butter :-)</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bm05} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <p className="carouselText">Healthy, quick and delicious meals!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bm06} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <p className="carouselText">Cook, Bake, Eat, Store!</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mainImageCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mainImageCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        
    )
}

export default ImageCarousel;