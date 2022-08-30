const path = process.env.PUBLIC_URL;
const plateImg = path + '/images/plate.png'
const antiSlipImg = path + '/images/antislip_light.png'
const foodImg = path + '/images/food_safe2.png'
const temperatureImg = path + '/images/temp.png'

const FeaturesSection = () => {
    return(
        <section className="section pt-2 pt-md-5 bg-light shadow">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-3 col-md-2">
                    <img src={plateImg} className="img-fluid platinum" alt="Let's cook with MrCook!"/>
                    </div>
                </div>
                <div className="row text-center">
                    <p className="main-section-title mb-0">Kitchenware redefined, Utility multiplied!</p>
                    <div className="d-flex justify-content-center">
                        <div className="underline col-1 align-self-center"></div>
                    </div>
                    <p className="quote-text">"Nature uses human imagination to lift her work of creation to even higher levels"</p>
                </div>
                <div className="row">
                    <div className="col-md-4 px-5 pt-3 pt-md-0">
                        <div className="d-flex justify-content-center">
                            <div className="col-3">
                                <img src={antiSlipImg} className="img-fluid medal" alt="Gold Medal"/>
                            </div>
                        </div>
                        <div className="row text-center">
                            <p className="sub-section-title my-1">SMOOTH AND ROUGH</p>
                        </div>
                        <p className="description-text">&emsp;&emsp;The bowl has been designed with special antislip protrusions at the bottom. These
                        come especially handy when you would like to mix some ingredients in MrCook (or knead some dough). Outer surface is silky smooth for
                        aesthetic eye pleasure. The inner surface is very smooth and shiny. This is done specifically to avoid food sticking and make cleaning 
                        as easy as it would be with ordinary plate.
                        </p>
                    </div>

                    <div className="col-md-4 px-5 pt-3 pt-md-0">
                        <div className="d-flex justify-content-center">
                            <div className="col-3">
                                <img src={foodImg} className="img-fluid medal" alt="Gold Medal"/>
                            </div>
                        </div>
                        <div className="row text-center">
                            <p className="sub-section-title my-1">LFGB FOOD GRADE</p>
                        </div>
                        <p className="description-text">&emsp;&emsp;Because MrCook is made 100% of platinum silicone, it is absolutely safe for food
                        contact. It doesnt have smell or taste and therefore cannot leave any particle contaminants or any other dangerous compounds on your dish. 
                        All batches of MrCook are thoroughly washed after production process to make sure that when it reaches your kitchen - it's ready to use
                        and most of all - safe!</p>
                    </div>

                    <div className="col-md-4 px-5 pt-3 pt-md-0">
                        <div className="d-flex justify-content-center">
                            <div className="col-3">
                                <img src={temperatureImg} className="img-fluid medal" alt="Gold Medal"/>
                            </div>
                        </div>
                        <div className="row text-center">
                            <p className="sub-section-title my-1">LIMITS</p>
                        </div>
                        <p className="description-text">&emsp;&emsp;MrCook is not without physical limitations. If used properly it will serve you forever but bear in mind
                        it's temperature limits. It can be frozen up to -60 degrees Celsius and heated up to 230 degrees. This temperature range is the maximum material
                        limit. If the temperatures are exceeded it may damage or even destroy MrCook. At the bottom of the bowl there are embeded pictograms to remind you
                        of MrCook temperature limits as well as other informative pictograms - be careful with open flame and sharp knives. Butter knives are allright! :)</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection