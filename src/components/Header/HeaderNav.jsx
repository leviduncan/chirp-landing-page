import React from 'react'
import { Link } from 'react-router-dom'
import TwitterBtn from './TwitterBtn'
import Menu from '../../assets/Hamburger Menu.svg'
import Logo from '../Logo/Logo'


function HeaderNav() {
    
    const myTitle = "Sign in with Twitter"
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-beige">
                <div className="container">
                <Logo>Chirp.</Logo>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""><img src={ Menu } /></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <TwitterBtn text={myTitle} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderNav