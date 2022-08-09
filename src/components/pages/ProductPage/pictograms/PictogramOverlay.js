import PictogramColumn from "./PictogramColumn";

const PictogramOverlay = ({side}) => {
    if (side==="left"){
        return(
            <div className="md position-absolute top-0 start-0">
                <PictogramColumn type={side}/>
            </div>
        )
    } else {
        return(
            <div className="md position-absolute top-0 end-0">
                <PictogramColumn type={side}/>
            </div>
        )
    }
}

export default PictogramOverlay;