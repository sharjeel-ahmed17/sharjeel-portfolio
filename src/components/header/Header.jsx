import React from 'react'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Sharjeel Ahmed
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#work">
                                Work
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#team">
                                Team
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                Contact Us
                            </a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Header