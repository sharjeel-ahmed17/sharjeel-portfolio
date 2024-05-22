
import WorkItem from "./WorkItem"
import workData from "../../components/data/Data"




const Work = () => {
    return (
        <>


            <section>
                <div className="container mx-auto my-5">
                    <h2 className="text-center" id="work">Work</h2>
                    <div className="row">

                        {
                            workData.map((item, index) => {
                                const { title, description, imgUrl, link, btnText, alt } = item;
                                return <WorkItem
                                    key={index}
                                    title={title}
                                    description={description}
                                    imgUrl={imgUrl}
                                    link={link}
                                    btnText={btnText}
                                    alt={alt}

                                />

                            })
                        }



                    </div>

                </div>
            </section>
        </>
    )
}

export default Work