import React, { Component } from "react";

export default class Cohort35PortfolioDetails extends Component {
    render() {
        return (
            <>
                <div className="cohortDiv">
                    <div className="hopeSubDiv">
                        <h1 className="hopePortfolioHeader">Cohort 35 Website</h1>
                        <p className="hopePortfolioBody">A site built to showcase the Nashville Software School Cohort 35 students and their respective skillsets and tech stacks.</p>
                    </div>
                    <div className="blueDotsDiv">
                        <img src={require("../resources/dots-redorange.png")} alt="blue dots" className="blueDots" />
                    </div>
                    <img src={require("../resources/cohort35-screenshot.png")} alt="hope screenshot" className="hopeScreenshot" />
                </div>
                <div className="cohortOverviewDiv">
                    <h4 className="hopeDetailsSection">- Overview</h4>
                    <h5 className="hopeDetailsHeader">Cohort 35 is Unique</h5>
                    <p className="hopeDetailsBody">
                        Much like every cohort that preceded us at Nashville Software School, we spent the first half of our six month bootcamp as a unified group learning the fundamentals of HTML, CSS, JavaScript, and ReactJS.
                    </p>
                    <p className="hopeDetailsBody">
                        At the end of our "mid-term" capstone, however, over half of our cohort diverged to focus on learning C# and .NET while the remaining students went on to focus on UI/UX research - an NSS first.
                    </p>
                </div>
                <div className="problemDiv">
                    <h4 className="hopeDetailsSection">- Problem</h4>
                    <h5 className="hopeDetailsHeader">Yes we're different. How do we convey and capitalize on that fact?</h5>
                    <p className="hopeDetailsBody">
                        While there has been one cohort in the past that has focused on UI/UX, cohort 35 was the first to split into two separate concentrations. Getting prospective employers to understand this right off the bat was crucial.
                    </p>
                </div>
                <div className="cohortOverviewDiv">
                    <h4 className="hopeDetailsSection">- Hypothesis</h4>
                    <h5 className="hopeDetailsHeader">
                        Emphasize our differences as early and as frequently as possible
                    </h5>
                    <p className="hopeDetailsBody">
                        While we take pride in who we are as a cohort, we have to understand that, for the purpose of building this website, we would not be the primary users.
                    </p>
                    <p className="hopeDetailsBody">
                        Employers may have an idea on how to navigate cohort sites from the past based on the templates that were used but with the introduction of a unique, split cohort a new approach was needed (we kinda wanted to stand out too).
                    </p>
                </div>
                <div className="statementDiv">
                    <h4 className="hopeDetailsSection">- Problem Statement</h4>
                    <h5 className="hopeDetailsHeader">
                        How might we promote Demo Day and showcase Cohort 35’s dual skill sets to potential employers with the ultimate goal of employment?
                    </h5>
                    <p className="hopeDetailsBody">
                        Maybe you’ve read about it on Reddit (or even witnessed it)? Sitting in a drive through and you pull up to the window, mindlessly prepared to hand the cashier your card to pay, and they inform you that the person ahead of you covered your ticket. It’s a pretty liberating experience, a breath of fresh air. You glance from the cashier to your rear view mirror and see someone waiting behind you. A stranger. You smile and decide to continue the spontaneous chain of a good deed, maintaining anonymity in the process. You pull away from the drive through with your food in tow, revelling in the little bit of faith you had in humanity that was restored that afternoon.
                    </p>

                </div>

                <div className="blueDotsDiv2">
                    <img src={require("../resources/dots-redorange.png")} alt="blue dots" className="blueDots" />
                </div>

                <h4 className="hopeDetailsSection">- Personas</h4>
                <div className="personaDiv">
                    <div className="personasHelpDiv">
                        <div className="helpDiv">
                            <p className="hopePersonaNeedBody">
                                1) Persona of User Searching for Employees
                            </p>
                            <img src={require("../resources/cohort35-Persona.png")} alt="Employer Persona" className="personasHelpImg" />
                        </div>
                    </div>
                </div>

                <h4 className="hopeDetailsSection">- Mockups</h4>
                <div className="mockupDiv">
                    <div className="mockupImagesTop">
                        <div className="topLeft">
                            <img src={require("../resources/1-HopeLogin.jpg")} alt="hope login" className="mockupsLeft" />
                        </div>
                        <div className="topLeft">
                            <img src={require("../resources/2-LandingPage.jpg")} alt="hope landing page" className="mockupsLeft" />
                        </div>
                        <div className="topLeft">
                            <img src={require("../resources/3-VariousIssuesView.jpg")} alt="various issues view" className="mockupsLeft" />
                        </div>
                        <div className="topLeft">
                            <img src={require("../resources/4-SubmittedCard.jpg")} alt="submitted card" className="mockupsLeft" />
                        </div>
                    </div>
                    <div className="mockupImagesBottom">
                        <div className="bottomRight">
                            <img src={require("../resources/5-EditCardModal.jpg")} alt="edit card modal" className="mockupsRight" />
                        </div>
                        <div className="bottomRight">
                            <img src={require("../resources/6-ResolvingUserCardInProgress.jpg")} alt="resolving in progress" className="mockupsRight" />
                        </div>
                        <div className="bottomRight">
                            <img src={require("../resources/7-ResolvingUserCardComplete.jpg")} alt="resolving complete" className="mockupsRight" />
                        </div>

                    </div>

                </div>

                <h4 className="hopeDetailsSection">- The Flow</h4>
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