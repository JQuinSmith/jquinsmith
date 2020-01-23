import React, { Component } from "react";
import './Portfolio.css'

class About extends Component {
    render() {
        return (
            <>
                <div className="aboutContainer">
                    <div className="imgContainer">
                        <img src={require("../images/Quin-Professional-Grayscale.png")} alt="Quin Professional" className="QuinImg" />
                    </div>
                    <div className="stackedContainer">
                        <h1 className="aboutHeader">A Little About Myself</h1>
                        <p className="aboutBody">
                            It was as a graphic design intern within a well-known tech company that I had my first encounter with web development. I witnessed a hastily crafted mock-up design of mine go from a Photoshop file to an integrated and functioning web page.
                        </p>
                        <br></br>
                        <p className="aboutBody">
                            Feeling as though there were opportunities to be discovered on the creative side of the tech field, I decided to venture into the world of front-end web development and UI/UX. The more I've learned about web development, the more excited I've become about my ability to be a problem solver as a front-end developer.
                        </p>
                        <div className="greenDots">
                            <img src={require("../resources/dots-green.png")} alt="green dots" className="greenDots" />
                        </div>
                        <a href={require("../resources/QuinSmithResume.pdf")} target="_blank" rel="noopener noreferrer" className="resumeButton">Download My Resume</a>
                    </div>


                </div>

            </>
        )
    }
}

export default About