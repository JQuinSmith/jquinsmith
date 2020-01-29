import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <>
                <div className="landingContainer">
                    <div className="imgContainer">
                        <img src={require("../images/Quin-Fun-Grayscale.png")} alt="Quin Professional" className="QuinImg" />
                    </div>
                    <div className="stackedContainer">
                        <h1 className="landingHeader">J. Quin Smith</h1>
                        <p className="landingBody">
                            Front End Web Developer &amp; UI/UX Designer
                            <br></br>from Nashville, Tennessee
                        </p>
                        <div className="yellowDots">
                            <img src={require("../resources/dots-yellow.png")} alt="yellow dots" className="yellowDotsImg" />
                        </div>


                        <div className="socialDiv">
                            {/* <h3 className="landingSubheader">Find Me on Social Media</h3> */}
                            <div className="socialIcons">
                                <div className="iconContainer">
                                    <a href="https://www.linkedin.com/in/jquinsmith/" target="_blank" rel="noopener noreferrer" ><img src={require("../images/linkedin.png")} alt="Quin's linkedIn" className="icon" />
                                    </a>
                                </div>
                                <div className="iconContainer">
                                    <a href="http://www.github.com/JQuinSmith" target="_blank" rel="noopener noreferrer" > <img src={require("../images/github.png")} alt="Quin's GitHub" className="icon" />
                                    </a>
                                </div>

                                <div className="iconContainer">
                                    <a href="https://dribbble.com/JQuinSmith" target="_blank" rel="noopener noreferrer" >
                                        <img src={require("../images/dribbble.png")} alt="Quin's dribbble" className="icon" />
                                    </a>
                                </div>

                                <div className="iconContainer">
                                    <a href="http://www.behance.net" target="_blank" rel="noopener noreferrer" ><img src={require("../images/behance.png")} alt="Quin's behance" className="icon" />
                                    </a>
                                </div>

                                {/* <div className="iconContainer">
                                    <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" ><img src={require("../images/instagram.png")} alt="Quin's Instagram" className="icon" />
                                    </a>
                                </div> */}
                            </div>
                        </div >
                    </div >


                </div >
            </>
        )
    }
}

export default Landing