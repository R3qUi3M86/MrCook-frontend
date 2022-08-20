const path = process.env.PUBLIC_URL;
const no1Img = path + '/images/no1.png'
const imagineImg = path + '/images/imagination.png'
const discoverImg = path + '/images/discovery.png'

const GoldSection = () => {
    return(
        <section className="section pt-2 pt-md-5">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-3 col-md-2">
                        <img src={no1Img} className="img-fluid medal" alt="Gold Medal"/>
                    </div>
                </div>
                <div className="row text-center">
                    <p className="main-section-title mb-0">The number one kitchenware you will ever need!</p>
                    <div className="d-flex justify-content-center">
                        <div className="underline col-1 align-self-center"></div>
                    </div>
                    <p className="quote-text">"Design simplicity conveys perfection"</p>
                </div>
                <div className="row">
                    <div className="col-md-6 px-5 pt-3 pt-md-0">
                        <div className="d-flex justify-content-center">
                            <div className="col-2">
                                <img src={imagineImg} className="img-fluid medal" alt="Gold Medal"/>
                            </div>
                        </div>
                        <div className="row text-center">
                            <p className="sub-section-title my-1">IMAGINE</p>
                        </div>
                        <p className="description-text">&emsp;&emsp;Everything starts with imagination. If you could think about ideal lifestyle for yourself 
                        and loved ones, what would it contain? Perhaps some physical activity like team sports, gym or maybe some yoga? Maybe 
                        you would like to loose few kilograms or gain weight if you think you are too skinny? We are what we eat - that is a fact! MrCook
                        is a perfect tool for you and anyone else that will help you finding this perfect lifestyle we all strive to achieve. "How?"
                        You might ask. Well... lets find out together!</p>
                    </div>

                    <div className="col-md-6 px-5 pt-3 pt-md-0">
                        <div className="d-flex justify-content-center">
                            <div className="col-2">
                                <img src={discoverImg} className="img-fluid medal" alt="Gold Medal"/>
                            </div>
                        </div>
                        <div className="row text-center">
                            <p className="sub-section-title my-1">DISCOVER</p>
                        </div>
                        <p className="description-text">&emsp;&emsp;Journey together with our community, explore and find unlimited utilities of MrCook! From baking bread, through
                        salads, slow cooked meats, vegan dishes to chicken wings - this is just for start. Use MrCook to store food in fridge or freezer, eat directly from it
                        or strain some pasta without neccessity of bulky colander. Out of cooking ideas? - check out <u>Recipes</u> section and explore limitless world 
                        of delicous dishes, specifically tailored for MrCook, created by our Chefs and of course - growing user community which you can be a part of 
                        absolutely for free! Tired of making grocery list? No problem! Select dishes you would like to make and you will be just a click of a button away 
                        from getting full list of necessary ingredients - Saving your time, so that you can use it where its best spent!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GoldSection