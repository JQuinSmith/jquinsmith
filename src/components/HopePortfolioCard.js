import React, { Component } from "react";
// import { Link } from "react-router-dom"
import "./Portfolio.css"

export default class HopePortfolioCard extends Component {

    render() {
        return (
            <>
                <div className="hopeDiv">
                    <div className="hopeSubDiv">
                        <h1 className="hopePortfolioHeader">Hope</h1>
                        <p className="hopePortfolioBody">A “pay-it-forward” app for users within the greater Nashville community to post or resolve tickets that may relate to personal or financial issues.</p>
                        <div className="buttonContainer">
                            <a href="/portfolio/hope" className="button">View the Case Study</a>
                        </div>
                    </div>
                    <div className="blueDotsDiv">
                        <img src={require("../resources/dots-blue.png")} alt="blue dots" className="blueDots" />
                    </div>
                    <img src={require("../resources/hope-screenshot.png")} alt="hope screenshot" className="hopeScreenshot" />

                </div>
            </>
        )
    }
}
