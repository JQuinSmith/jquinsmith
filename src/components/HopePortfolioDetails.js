import React, { Component } from "react";
import "./Portfolio.css"

export default class HopePortfolioDetails extends Component {
    render() {
        return (
            <>
                <div className="hopeDiv">
                    <div className="hopeSubDiv">
                        <h1 className="hopePortfolioHeader">Hope</h1>
                        <p className="hopePortfolioBody">A “pay-it-forward” app for users within the greater Nashville community to post or resolve tickets that may relate to personal or financial issues.</p>
                    </div>
                    <div className="blueDotsDiv">
                        <img src={require("../resources/dots-blue.png")} alt="blue dots" className="blueDots" />
                    </div>
                    <img src={require("../resources/hope-screenshot.png")} alt="hope screenshot" className="hopeScreenshot" />
                </div>
                <div className="overviewDiv">
                    <h4 className="hopeDetailsSection">- Overview</h4>
                    <h5 className="hopeDetailsHeader">The Hope App is a two-week project that gave me a viable path to address a growing local stigma.</h5>
                    <p className="hopeDetailsBody">
                        Nashville is currently undergoing a trend of exponential growth. Cultural and financial differences between transplants and locals, however, have introduced a unique culture that is not without its downsides.
                    </p>
                    <p className="hopeDetailsBody">
                        As a counter to that negativity, Hope allows users to either ask for assistance with a particular issue or lend others a hand by accepting existing issues posted by other users.
                    </p>
                    <p className="hopeDetailsBody">
                        Rome wasn’t built in a day and a lot of the hardships we face on a global scale can’t realistically be solved by one person in that same amount of time either. Hope was designed to serve as a ripple that might remind and inspire others that we’re all in this together.
                    </p>
                </div>
                <div className="problemDiv">
                    <h4 className="hopeDetailsSection">- Problem</h4>
                    <h5 className="hopeDetailsHeader">Small town charm with a big city vibe.</h5>
                    <p className="hopeDetailsBody">
                        Rising cost of living, stagnant wages, an influx of new residents, traffic - the face of Nashville has changed drastically since the early 2000s. Life is hard and there may not always be a means to tackle an unexpected expense or situation as it arises.
                    </p>
                </div>
                <div className="hypothesisDiv">
                    <h4 className="hopeDetailsSection">- Hypothesis</h4>
                    <h5 className="hopeDetailsHeader">
                        Reintroduce people to the concept of helping each other.
                    </h5>
                    <p className="hopeDetailsBody">
                        We live in an interesting period of time where trust is simultaneously easy to place and hard to earn. From hopping into shared rides, staying with strangers while traveling to other cities, to online grocery delivery - many of these instances involve placing trust in absolute strangers.
                    </p>
                    <p className="hopeDetailsBody">
                        Imagine how much tighter knit of a community that could be cultivated in Nashville if that same premise were applied to selflessly helping those same strangers in need?
                    </p>
                </div>
                <div className="statementDiv">
                    <h4 className="hopeDetailsSection">- Problem Statement</h4>
                    <h5 className="hopeDetailsHeader">
                        How might we offer a platform that connects users in need with other local users willing to lend a hand, emphasizing the sense of community within the Greater Nashville Area?
                    </h5>
                    <p className="hopeDetailsBody">
                        Maybe you’ve read about it on Reddit (or even witnessed it)? Sitting in a drive through and you pull up to the window, mindlessly prepared to hand the cashier your card to pay, and they inform you that the person ahead of you covered your ticket. It’s a pretty liberating experience, a breath of fresh air. You glance from the cashier to your rear view mirror and see someone waiting behind you. A stranger. You smile and decide to continue the spontaneous chain of a good deed, maintaining anonymity in the process. You pull away from the drive through with your food in tow, revelling in the little bit of faith you had in humanity that was restored that afternoon.
                    </p>

                </div>

                <div className="blueDotsDiv2">
                    <img src={require("../resources/dots-blue.png")} alt="blue dots" className="blueDots" />
                </div>

                <h4 className="hopeDetailsSection">- Personas</h4>
                <div className="personaDiv">
                    <div className="personasHelpDiv">
                        <div className="helpDiv">
                            <p className="hopePersonaNeedBody">
                                1) Persona of User in Need
                            </p>
                            <img src={require("../resources/Person-In-Need.png")} alt="Girl in need" className="personasHelpImg" />
                        </div>
                    </div>
                    <div className="personasAssistDiv">
                        <div className="assistDiv">
                            <p className="hopePersonaAssistBody">
                                2) Persona of User Lending a Hand
                            </p>
                            <img src={require("../resources/Person-Lending-a-Hand.png")} alt="Girl lending a hand" className="personasAssistImg" />
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