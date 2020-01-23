import React, { Component } from "react";
import "./Portfolio.css"

export default class Cohort35PortfolioCard extends Component {
    render() {
        return (
            <>
                <div className="hopeDiv">
                    <div className="hopeSubDiv">
                        <h1 className="cohortPortfolioHeader">Cohort 35 Website</h1>
                        <p className="cohortPortfolioBody">A site built to showcase the Nashville Software School Cohort 35 students and their respective skillsets and tech stacks.</p>
                        <div className="buttonContainer">
                            <a href="/jquinsmith/cohort35" className="button">View the Case Study</a>
                        </div>
                    </div>
                    <div className="redOrangeDotsDiv">
                        <img src={require("../resources/dots-redorange.png")} alt="red orange dots" className="redOrangeDots" />
                    </div>
                    <img src={require("../resources/cohort35-screenshot.png")} alt="cohort screenshot" className="hopeScreenshot" />

                </div>
            </>
        )
    }
}