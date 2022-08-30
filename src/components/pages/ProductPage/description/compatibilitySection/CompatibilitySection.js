const path = process.env.PUBLIC_URL;
const cookingImg = path + '/images/cooking.png'
const ovenImg = path + '/images/oven_light.png'
const microwaveImg = path + '/images/microwave_light.png'
const dishwasherImg = path + '/images/dishwasher_light.png'

const CompatibilitySection = () => {
    return(
        <section className="section pt-2 pt-md-5">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-3 col-md-2">
                    <img src={cookingImg} className="img-fluid platinum" alt="Let's cook with MrCook!"/>
                    </div>
                </div>
                <div className="row text-center">
                    <p className="main-section-title mb-0">Cooking unleashed!</p>
                    <div className="d-flex justify-content-center">
                        <div className="underline col-1 align-self-center"></div>
                    </div>
                    <p className="quoteText">"Healthy body, healthy mind"</p>
                </div>
                <div className="row">
                    <div className="col-md-4 px-5 pt-3 pt-md-0">
                        <div className="d-flex justify-content-center">
                            <div className="col-3">
                                <img src={ovenImg} className="img-fluid medal" alt="Gold Medal"/>
                            </div>
                        </div>
                        <div className="row text-center">
                            <p className="sub-section-title my-1">OVEN BAKE</p>
                        </div>
                        <p className="description-text">&emsp;&emsp;MrCook can be safely used in electrical ovens. It's dimensions are
                        just right to fit 3 of them in a single typical home oven. Some ovens can pack even 6 units simultaneously! Be careful
                        hovewer not to use open flame against your MrCook because it might get damaged or even destroyed. Our <u>Recipes</u> section
                        will provide you hundreads of dish ideas to choose from. You can even share your idea with community using our vitual "Recipe 
                        creator"! You can also filter recipes by products or types (vegan / low carbs etc.).
                        </p>
                    </div>

                    <div className="col-md-4 px-5 pt-3 pt-md-0">
                        <div className="d-flex justify-content-center">
                            <div className="col-3">
                                <img src={microwaveImg} className="img-fluid medal" alt="Gold Medal"/>
                            </div>
                        </div>
                        <div className="row text-center">
                            <p className="sub-section-title my-1">USE IN MICROWAVE</p>
                        </div>
                        <p className="description-text">&emsp;&emsp;Your MrCook can be safely used in microwave oven. Extensive testing has proven that 
                        it can be placed in the microwave for at least 5 minutes at 1000W power without any problems. Whether you cook for yourself, your
                        familly or friends, you might find that you've ate enough and would like to keep your dish for later consumptions. This is not a problem
                        for MrCook - just close the bowl and refrigerate it, only to heat it up again in microwave when you feel hungry.</p>
                    </div>

                    <div className="col-md-4 px-5 pt-3 pt-md-0">
                        <div className="d-flex justify-content-center">
                            <div className="col-3">
                                <img src={dishwasherImg} className="img-fluid medal" alt="Gold Medal"/>
                            </div>
                        </div>
                        <div className="row text-center">
                            <p className="sub-section-title my-1">EASY CLEAN</p>
                        </div>
                        <p className="description-text">&emsp;&emsp;No more heaps of dirty dishes. MrCook is all in one - cooking bowl, ovenware, tableware, eating plate
                        and storage container. It can be used in dishwasher easily and it's flexibility allows you to always find space for it even when your dishwaser
                        seems full. MrCook can also be wonderful space saver in your kitchen - if you have limited storage space, just roll it up tightly and it will take 
                        no more space than carton tube in your paper towel. This is why sailors love MrCook: takes little space, wont break on high seas and it's multi-purpose!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompatibilitySection