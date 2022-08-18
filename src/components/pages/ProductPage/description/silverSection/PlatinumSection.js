const path = process.env.PUBLIC_URL;
const platinumImg = path + '/images/plat_silicone_square.png'
const technologyImg = path + '/images/technology.png'
const simplicityImg = path + '/images/simplicity.png'

const PlatinumSection = () => {
    return(
        <section className="section pt-2 pt-md-5 bg-light shadow">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-3 col-md-2">
                    <img src={platinumImg} className="img-fluid platinum" alt="Platinum Silicone 100%"/>
                    </div>
                </div>
                <div className="row text-center">
                    <p className="mainSectionTitle mb-0">Future starts today!</p>
                    <div className="d-flex justify-content-center">
                        <div className="underline col-1 align-self-center"></div>
                    </div>
                    <p className="quoteText">"Impossible things we do immediately, miracles take a little longer"</p>
                </div>
                <div className="row">
                    <div className="col-md-6 px-5 pt-3 pt-md-0">
                        <div className="d-flex justify-content-center">
                            <div className="col-2">
                                <img src={technologyImg} className="img-fluid medal" alt="Gold Medal"/>
                            </div>
                        </div>
                        <div className="row text-center">
                            <p className="subSectionTitle my-1">TECHNOLOGY</p>
                        </div>
                        <p className="descriptionText">&emsp;&emsp;From imagination derives invention. We humans have one thing in common -
                        we want to improve the world around us making it more habitable, friendly and easy to live in. Advanced material
                        research is no exception to this rule. With technology we possess extraordinary potential to create wonderfull tools
                        and inventions. MrCook is made of <u>100% platinum silicone</u> material also known as "Platinum cure silicone" - 
                        two-component high tear strength and flexible compound, making MrCook cold and heat resistant, flexible and
                        theoretically indestructibe when put to right use! It can practially serve you... forever!</p>
                    </div>

                    <div className="col-md-6 px-5 pt-3 pt-md-0">
                        <div className="d-flex justify-content-center">
                            <div className="col-2">
                                <img src={simplicityImg} className="img-fluid medal" alt="Gold Medal"/>
                            </div>
                        </div>
                        <div className="row text-center">
                            <p className="subSectionTitle my-1">SIMPLICITY</p>
                        </div>
                        <p className="descriptionText">&emsp;&emsp;Although MrCook looks like an ordinary bowl, do not get deceived by first
                        impression. It has been created with extreme precision and attention to details. Main wing and slot shape are formed
                        in such way so that it will not open itself unwantingly. It's varying thickness and curvature is result of extensive research and
                        computer simulations so that it maintains its bowl shape when you need it and doesn't flex too much so you can eat a soup from it.
                        On the other hand, it's flexibility allows you to easily drain it's contents if you need to (for example excess fat 
                        residue after baking).</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlatinumSection