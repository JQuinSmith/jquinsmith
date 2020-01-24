import React, { Component } from "react";

export default class BangazonPortfolioCard extends Component {
    render() {
        return (
            <>
                <div className="hopeDiv">
                    <div className="hopeSubDiv">
                        <h1 className="hopePortfolioHeader">Bangazon</h1>
                        <p className="hopePortfolioBody">A  web-app for administrative staff of Bangazon to create and manage customer and employee data.</p>
                        <div className="buttonContainer">
                            <a href="/bangazon" className="button">View the Case Study</a>
                        </div>
                    </div>
                    <div className="orangeDotsDiv">
                        <img src={require("../resources/dots-orange.png")} alt="orange dots" className="orangeDots" />
                    </div>
                    <img src={require("../resources/bangazon-screenshot.png")} alt="hope screenshot" className="hopeScreenshot" />

                </div>
            </>
        )
    }
}