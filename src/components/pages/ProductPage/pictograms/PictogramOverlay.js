import PictogramColumn from "./PictogramColumn";

const PictogramOverlay = ({side}) => {
    if (side==="left"){
        return(
            <div className="position-absolute top-50 start-0 translate-middle-y">
                <PictogramColumn type={side}/>
            </div>
        )
    } else {
        return(
            <div className="position-absolute top-50 end-0 translate-middle-y">
                <PictogramColumn type={side}/>
            </div>
        )
    }
}

export default PictogramOverlay;