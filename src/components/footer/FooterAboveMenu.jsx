import React from 'react'
import FooterAboveLeft from './FooterAboveLeft'
import FooterAboveRight from './FooterAboveRight'
import FooterAboveMiddle from './FooterAboveMiddle'

const FooterAboveMenu = () => {
    return (
        <div className="container mx-auto my-4">
            <div className="row mx-auto">


                <FooterAboveLeft />
                <FooterAboveMiddle />
                <FooterAboveRight />

            </div>
        </div>
    )
}

export default FooterAboveMenu