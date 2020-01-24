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
                </div>
                <div className="problemDiv">
                    <h4 className="hopeDetailsSection">- Problem</h4>
                    <h5 className="hopeDetailsHeader">Inefficient storage and use of data and resources.</h5>
                    <p className="hopeDetailsBody">
                        Bangazon Aquariums LLC currently uses Google Docs to manage their administrative tasks related to employees and customers. Google Docs is not an integrated system, so there are often multiple and competing pieces of information, which results in poor customer service and employee relations. In addition, Bangazon is slow in response to replacing aging computer equipment and managing employee trainings.
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
                <div className="mockupDiv">
                    <div className="mockupImagesRow">
                        <div className="topLeft">
                            <img src={require("../resources/bangazonJourneyMap-1.jpg")} alt="hope login" className="bangazonMaps" />
                        </div>
                        <div className="topLeft">
                            <img src={require("../resources/bangazonJourneyMap-2.jpg")} alt="hope landing page" className="bangazonMaps" />
                        </div>
                    </div>

                </div>

                <h4 className="hopeDetailsSection">- Content Maps</h4>
                <div className="mockupDiv">
                    <div className="mockupImagesRow">
                        <div className="topLeft">
                            <img src={require("../resources/bangazonContentMap-1.jpg")} alt="hope login" className="bangazonMaps" />
                        </div>
                        <div className="topLeft">
                            <img src={require("../resources/bangazonContentMap-2.jpg")} alt="hope landing page" className="bangazonMaps" />
                        </div>
                    </div>

                </div>

                <h4 className="hopeDetailsSection">- Lo-Fi Mockups</h4>
                <div className="mockupDiv">
                    <div className="mockupImagesResearch">
                            <img src={require("../resources/bangazonLoFiMockups.jpg")} alt="hope login" className="bangazonMockups" />
                    </div>

                </div>

                <h4 className="hopeDetailsSection">- User Testing</h4>
                <div className="mockupDiv">
                    <div className="mockupImagesResearch">
                        <img src={require("../resources/bangazonPaperMockup-usertest.jpg")} alt="resolving complete" className="bangazonMockups" />
                    </div>
                </div>

                <h4 className="hopeDetailsSection">- Hi-Fi Mockups</h4>
                <div className="flowDiv">
                    <h5 className="hopeFlowBody">
                        1)
                        Upon logging in, the user is presented with a map and list of available issues awaiting resolution.
                    </h5>
                    <div className="hopeFlowImgRight">
                        <img src={require("../resources/1-Landing.png")} alt="resolving complete" className="hopeFlowImg" />
                    </div>
                </div>


                <div className="flowDivInverse">
                    <h5 className="hopeFlowBodyInverse">
                        2)
                        If the user chooses to create an issue, a modal containing a form appears, allowing the user to add details, location, and an image to better describe the problem they are facing.
                    </h5>
                    <div className="hopeFlowImgLeft">
                        <img src={require("../resources/2-CreatinganIssue.png")} alt="resolving complete" className="hopeFlowImg" />
                    </div>
                </div>

                <div className="flowDiv">
                    <h5 className="hopeFlowBody">
                        3)
                        Once the issue is created, a new card populates the issue list on the landing page and on the user's 'My Issues' tab with the details he or she has entered.
                    </h5>
                    <div className="hopeFlowImgRight">
                        <img src={require("../resources/3-MyIssueView.png")} alt="resolving complete" className="hopeFlowImg" />
                    </div>
                </div>

                <div className="flowDivInverse">
                    <h5 className="hopeFlowBodyInverse">
                        4)
                        Inversely, the user can choose to take on a task that someone else has created.
                    </h5>
                    <div className="hopeFlowImgLeft">
                        <img src={require("../resources/4-LendingSomeoneaHand.png")} alt="resolving complete" className="hopeFlowImg" />
                    </div>
                </div>

                <div className="flowDiv">
                    <h5 className="hopeFlowBody">
                        5)
                        Once the task is accepted, a new card populates the issue list on the landing page and on the user's 'My Accepted Issues' tab with the deadline listed and the option to either opt out of lending assistance or declaring the task as complete.
                    </h5>
                    <div className="hopeFlowImgRight">
                        <img src={require("../resources/5-CompletingtheTask.png")} alt="resolving complete" className="hopeFlowImg" />
                    </div>
                </div>

                <div className="flowDivInverse">
                    <h5 className="hopeFlowBodyInverse">
                        6)
                        Once the task has been addressed, the card then appears on the 'Resolved Issues' tab. Both the user who created the issue and the user who completed the task are afforded the opportunity to leave additional comments or reviews as necessary.
                    </h5>
                    <div className="hopeFlowImgLeft">
                        <img src={require("../resources/6-AddingComments.png")} alt="resolving complete" className="hopeFlowImg" />
                    </div>
                </div>
                <div className="portfolioButtonContainer">
                    <a href="#root" className="button">Back to Top</a>
                </div>
            </>
        )
    }
}

