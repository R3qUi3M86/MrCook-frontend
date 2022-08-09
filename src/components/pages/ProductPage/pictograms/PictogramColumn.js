import './pictograms.css';

const path = process.env.PUBLIC_URL;
const no1Img = path + '/images/no1.png'
const ovenImg = path + '/images/oven_light.png'
const microwaveImg = path + '/images/microwave_light.png'
const dishwasherImg = path + '/images/dishwasher_light.png'
const platinumImg = path + '/images/plat_silicone_square.png'
const antiSlipImg = path + '/images/antislip_light.png'
const foodImg = path + '/images/food_safe.png'
const temperatureImg = path + '/images/temp.png'

const PictogramColumn = ({type}) => {
    if (type==="left"){
        return(
            <div className="d-flex flex-column ps-3 pt-5 pt-md-0 pictogram-column">
                <img src={no1Img} className="img-fluid medal" alt="Gold Medal"/>
                <img src={ovenImg} className="img-fluid oven py-1" alt="Oven pictogram"/>
                <img src={microwaveImg} className="img-fluid microwave py-1" alt="Microwave pictogram"/>
                <img src={dishwasherImg} className="img-fluid dishwasher" alt="Dishwasher pictogram"/>
            </div>
        )
    } else {
        return(
            <div className="d-flex flex-column pe-3 pt-5 pt-md-0 pictogram-column">
                <img src={platinumImg} className="img-fluid platinum" alt="Platinum Silicone 100%"/>
                <img src={antiSlipImg} className="img-fluid antislip" alt="Anti-slip pictogram"/>
                <img src={foodImg} className="img-fluid food py-1" alt="Food Safe pictogram"/>
                <img src={temperatureImg} className="img-fluid temperature" alt="Temperature range pictogram"/>

            </div>
        )
    }
}

export default PictogramColumn;