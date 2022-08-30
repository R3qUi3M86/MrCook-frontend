const DefaultSpinner = () => {
    return(
        <div className="text-center py-5">
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default DefaultSpinner;