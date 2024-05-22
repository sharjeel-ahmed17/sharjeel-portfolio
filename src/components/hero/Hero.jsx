import React from 'react'

const Hero = () => {
    return (
        <section>
            <div className='container'>
                <div className="my-5 text-center">
                    <img
                        className="d-block mx-auto mb-4"
                        src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSLZXLULv4WOPL7vHeRnNiYDG3wvV9pJWKvvS52GP6swqagP7bOGAO-gCpdSB5kMkAlG6FPc8sJh4ZRHw0"
                        alt=""
                        width={100}
                        height={100}
                        style={
                            {
                                borderRadius: "50%"
                            }
                        }
                    />
                    <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">
                            Quickly design and customize responsive mobile-first sites with Bootstrap,
                            the world’s most popular front-end open source toolkit, featuring Sass
                            variables and mixins, responsive grid system, extensive prebuilt
                            components, and powerful JavaScript plugins.
                        </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
                                Primary button
                            </button>

                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Hero