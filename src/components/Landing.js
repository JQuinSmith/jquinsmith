import React, { Component } from "react";

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
                            Front End Web Developer & UI/UX Designer
                            <br></br>from Nashville, Tennessee
                        </p>
                        <div className="yellowDots">
                            <img src={require("../resources/dots-yellow.png")} alt="yellow dots" className="yellowDotsImg" />
                        </div>
                        <div className="landingSubcontainer">
                            <h2 className="landingSubheader">
                                Let’s connect
                        </h2>
                            <p className="landingBody">Interested in knowing more about my work?
                        <br></br>
                                Shoot me an email:
                        </p>
                            <p className="landingBody"> jquinsmyth@gmail.com
                        </p>
                            <p className="landingBody">
                                Also find me on social media:
                        </p>
                        </div>
                    </div>


                </div>
            </>
        )
    }
}

export default Landing