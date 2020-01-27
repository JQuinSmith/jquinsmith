import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
import '../navigation/NavBar.css'

class Navigation extends Component {

    render() {
        return (
            <>
                <div className="navContainer">
                    <div className="logoContainer">
                        <a href="/"><img src={require("../images/QuinAnimation.png")} alt="logo" className="quinLogo"/></a>
                        <a href="/"><img src={require("../images/QuinAnimation.gif")} alt="logo" className="quinLogoGif"/></a>

                    </div>
                    <div>
                        <ul className="navbar">
                            <li><Link className="portfolio-link" to="/portfolio">Portfolio</Link></li>
                            <li><a className="resume-link" target="_blank" rel="noopener noreferrer" href={require("../resources/QuinSmithResume.pdf")}>Resume</a></li>
                            <li><Link className="about-me-link" to="/about">About</Link></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Navigation)
