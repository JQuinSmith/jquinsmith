import React, { Component } from "react";

export default class BangazonPortfolioDetails extends Component {
    render() {
        return (
            <>
                <div className="bangazonDiv">
                    <div className="hopeSubDiv">
                        <h1 className="hopePortfolioHeader">Bangazon</h1>
                        <p className="hopePortfolioBody">A web-app for administrative staff of the fictional company "Bangazon" to create and manage customer and employee data.</p>
                    </div>
                    <div className="blueDotsDiv">
                        <img src={require("../resources/dots-orange.png")} alt="blue dots" className="blueDots" />
                    </div>
                    <img src={require("../resources/bangazon-screenshot.png")} alt="hope screenshot" className="hopeScreenshot" />
                </div>
                <div className="bangazonOverviewDiv">
                    <h4 className="hopeDetailsSection">- Overview</h4>
                    <h5 className="hopeDetailsHeader">Bangazon - Where Fish Meet Water</h5>
                    <p className="hopeDetailsBody">
                        Bangazon Inc., a personalized e-commerce platform, is a fictional company at Nashville Software School. The goal of Bangazon is to become the most personalized, and most powerful commercial platform for individuals around the globe. Nashville Software School "employs" its students to build all of the technology and tooling for the company.
                    </p>
                    <p className="hopeDetailsBody">
                        For the first half of this project, our cohort worked as a whole to dive into researching and testing with users and pre-existing platforms and applications in order to create a fleshed out mock-up, using Figma as our prototyping tool of choice.
                    </p>
                    <p className="hopeDetailsBody">
                        Once the research and prototyping phase was complete, I took on coding the project using the pre-established API endpoints provided by one of the C# instructors coordinating the project.
                    </p>
                </div>
                <div className="problemDiv">
                    <h4 className="hopeDetailsSection">- Problem</h4>
                    <h5 className="hopeDetailsHeader">Inefficient storage and use of data and resources.</h5>
                    <p className="hopeDetailsBody">
                        Bangazon Aquariums LLC currently uses Google Docs to manage their administrative tasks related to employees and customers. Google Docs is not an integrated system, so there are often multiple and competing pieces of information, which results in poor customer service and employee relations. In addition, Bangazon is slow in response to replacing aging computer equipment and managing employee trainings.
                    </p>
                    <p className="hopeDetailsBody">
                        They need a better way to manage two important parts of their company: customers and their products, and employees.
                    </p>

                </div>
                <div className="bangazonOverviewDiv">
                    <h4 className="hopeDetailsSection">- Problem Statement</h4>
                    <h5 className="hopeDetailsHeader">
                        How might we provide a centralized platform to track and manage Bangazon customer and employee information, making it easier for Administration to access and update information?

                    </h5>
                </div>
                <div className="statementDiv">
                    <h4 className="hopeDetailsSection">- Design Systems</h4>
                    <div className="hubspotContainer">
                        <div className="designSystemDiv">
                            <h5 className="bangazonDetailsHeader">
                                Utilizing Hubspot's Canvas Design System.
                            </h5>
                            <p className="bangazonDetailsBody">
                                We based our design decisions on the HubSpot Canvas Design System.
                                All components inherit their color palette, styling, and typography.
                            </p>
                        </div>
                        <div className="hubspotDiv">
                            <img src={require("../resources/HubSpotCanvas.png")} alt="canvas" className="hubspotImg" />
                        </div>
                    </div>
                </div>

                <div className="blueDotsDiv2">
                    <img src={require("../resources/dots-orange.png")} alt="blue dots" className="blueDots" />
                </div>

                <h2 className="bangazonSectionHeader">Digging Into the Research...</h2>

                <h4 className="hopeDetailsSection">- Personas</h4>
                <div className="personaDiv">
                    <div className="personasHelpDiv">
                        <div className="helpDiv">
                            <p className="hopePersonaNeedBody">
                                1) Persona of Hattie, the Chief Product Officer at Bangazon
                            </p>
                            <img src={require("../resources/bangazonPersona-Hattie.png")} alt="Employer Persona" className="personasHelpImg" />
                        </div>
                    </div>

                    <div className="personasHelpDiv">
                        <div className="helpDiv">
                            <p className="hopePersonaNeedBody">
                                2) Persona of Lisa, the Chief Talent Officer at Bangazon
                            </p>
                            <img src={require("../resources/bangazonPersona-Lisa.png")} alt="Employer Persona" className="personasHelpImg" />
                        </div>
                    </div>
                </div>

                <h4 className="hopeDetailsSection">- Journey Maps</h4>
                <div className="mockupImagesResearch">
                    <img src={require("../resources/bangazonJourneyMap-1.jpg")} alt="hope login" className="bangazonMaps" />

                    <img src={require("../resources/bangazonJourneyMap-2.jpg")} alt="hope landing page" className="bangazonMaps" />
                </div>


                <h4 className="hopeDetailsSection">- Content Maps</h4>
                <div className="mockupImagesResearch">
                    <img src={require("../resources/bangazonContentMap-1.jpg")} alt="hope login" className="bangazonMaps" />

                    <img src={require("../resources/bangazonContentMap-2.jpg")} alt="hope landing page" className="bangazonMaps" />
                </div>



                <h4 className="hopeDetailsSection">- Lo-Fi Mockups & User Testing</h4>
                <div className="mockupImagesResearch">
                    <img src={require("../resources/bangazonLoFiMockups.jpg")} alt="hope login" className="bangazonMockups" />

                    <img src={require("../resources/bangazonPaperMockup-usertest.jpg")} alt="resolving complete" className="bangazonMockups" />
                </div>




                <h4 className="hopeDetailsSection">- Hi-Fi Mockups</h4>
                <div className="vimeoContainer">
                    <h5 className="vimeoDetailsHeader">
                        Based on the results from our user testing, we created a high fidelity mock-up in Figma to use as a guide once coding was underway.
                    </h5>
                    <div className="bangazonMockupVideo">
                        <iframe src="https://player.vimeo.com/video/387458499" width="640" height="368" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                        <a href="https://vimeo.com/387458499"></a>
                    </div>
                </div>


                <div className="portfolioButtonContainer">
                    <a href="#root" className="button">Back to Top</a>
                </div>
            </>
        )
    }
}

