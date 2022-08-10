import './phrase.css'

const CommercialPhrase = () =>{
    return(
        <div className="d-flex position-absolute bottom-0 start-50 translate-middle-x pb-md-5">
            <p className="phraseStart commercialPhrase">YOUR BEST FRIEND</p>
            <p className="commercialPhrase">&nbsp;|&nbsp;</p>
            <p className="phraseEnd commercialPhrase"> YOUR BEST LIFE</p>
        </div>
    )
}

export default CommercialPhrase;