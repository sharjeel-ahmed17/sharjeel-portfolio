

const WorkItem = ({ title, description, link, btnText, imgUrl, alt }) => {
    return (
        <div className="col-md-6 p-2 position-relative">
            <div className="image-container">
                <img src={imgUrl} alt={alt} className="w-100" />
                <div className="overlay py-5">
                    <div className="overlay-text ">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a href={link} target="_">

                            <button className='btn btn-primary'>
                                {btnText}</button>

                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkItem