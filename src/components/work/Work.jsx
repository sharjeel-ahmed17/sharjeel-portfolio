import { alignPropType } from "react-bootstrap/esm/types";
import WorkItem from "./WorkItem"

let workData = [
    {
        title: "Project Alpha",
        description: "A comprehensive project that explores advanced AI techniques and their applications in various fields.",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXs8fVridzoME5y2GR5TVbjk8kpMeY_z0CFMCX98TuZQ&s",
        link: "https://example.com/",
        btnText: "visit site",
        alt: "this is some how"
    },
    {
        title: "Project Beta",
        description: "An innovative project focused on the development of sustainable energy solutions.",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXs8fVridzoME5y2GR5TVbjk8kpMeY_z0CFMCX98TuZQ&s",
        link: "https://example.com/",
        btnText: "visit site",
        alt: "this is some how"
    },
    {
        title: "Project Gamma",
        description: "A collaborative project aiming to enhance data security through cutting-edge cryptographic methods.",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXs8fVridzoME5y2GR5TVbjk8kpMeY_z0CFMCX98TuZQ&s",
        link: "https://example.com/project-gamma",
        btnText: "visit site",
        alt: "this is some how"
    },
    {
        title: "Project Delta",
        description: "An exciting project dedicated to creating immersive virtual reality experiences.",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXs8fVridzoME5y2GR5TVbjk8kpMeY_z0CFMCX98TuZQ&s",
        link: "https://example.com/",
        btnText: "visit site",
        alt: "this is some how"
    }
];

const Work = () => {
    return (
        <>


            <section>
                <div className="container mx-auto">
                    <div className="row">
                        <WorkItem />
                        {
                            workData.map((item, index) => {
                                const { title, description, imgUrl, link, btnText, alt } = item;
                                return <Work
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