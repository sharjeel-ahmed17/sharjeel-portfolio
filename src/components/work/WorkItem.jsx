

const WorkItem = ({ title, description, link, btnText, imgUrl, alt }) => {
    return (
        <div className="col-md-6 p-2 position-relative">
            <div className="image-container">
                <img src={imgUrl} alt={alt} className="w-100" />
                <div className="overlay">
                    <div className="overlay-text">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <button className='btn btn-primary'>
                            <a href={link}></a>
                            {btnText}</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkItem