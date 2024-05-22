import React from 'react'

const FooterAboveRight = () => {
    return (
        <div className="col-md-4 d-flex justify-content-center flex-column  text-left">
            <h4 className='fw-bold text-uppercase'>Quick Links</h4>
            {/* <p className='m-0 p-0'>home</p>
            <p className='m-0 p-0'>About</p>
            <p className='m-0 p-0'>services

            </p> */}
            <a href="/">home</a>
            <a href="">abut</a>
            <a href="#contact">contact</a>
            <a href="#service">service</a>
        </div>
    )
}

export default FooterAboveRight