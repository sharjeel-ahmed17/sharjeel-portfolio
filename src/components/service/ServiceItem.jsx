

const ServiceItem = () => {
    return (
        <div className="col-md-6 p-2">

            <div className="card" style={{ width: "100%" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXvh-RtpZo5Gl3zIrppko2FdPV9cNS_oFTaJ2VFm-vw&s" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </p>


                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>

                </div>
            </div>

        </div>

    )
}

export default ServiceItem