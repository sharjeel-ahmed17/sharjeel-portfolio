
import ServiceItem from './ServiceItem'

const Service = () => {
    return (
        <section>

            <div className="container my-5">
                <h2 className='text-center' id="services">Services</h2>
                <div className="row mx-auto w-75">

                    <ServiceItem />
                    <ServiceItem />
                    <ServiceItem />
                    <ServiceItem />
                </div>

            </div>
        </section>
    )
}

export default Service