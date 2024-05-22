import React from 'react'

const TeamItem = () => {
    return (
        <div className="col-md-3 p-2">
            <div className="image-container">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztXcEhNkdwi8leiw0TT8Cm8R7LROHnkBwQvBTJglVrQ&s" alt=""
                    style={{
                        height: '500px',
                        width: '100%',
                        boxShadow: '0 0 10px 10px rgba(0,0,0,0.2)'
                    }}
                />

                <div className="overlay">
                    <div className="overlay-text">
                        <h3>Sharjeel</h3>
                        <p>Web Developer</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TeamItem