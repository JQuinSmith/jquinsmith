import { Route } from "react-router-dom";
import React, { Component } from "react";
import Landing from './components/Landing'
import PortfolioList from './components/PortfolioList'
import HopePortfolioDetails from './components/HopePortfolioDetails'
import Cohort35PortfolioDetails from './components/Cohort35PortfolioDetails'
import BangazonPortfolioDetails from './components/BangazonPortfolioDetails'
import About from './components/About'
import Resume from './Resume'
import Contact from './Contact'

export default class ApplicationViews extends Component {

    render() {
        return (
            <>
                <Route
                    exact path="/jquinsmith" render={props => {
                        return <Landing {...props} />

                    }}
                />

                <Route
                    exact path="/jquinsmith/about" render={props => {
                        return <About {...props} />

                    }}
                />

                <Route
                    exact path="/jquinsmith/portfolio" render={props => {
                        return <PortfolioList {...props} />

                    }}
                />

                <Route
                    exact path="/portfolio/hope" render={props => {
                        return <HopePortfolioDetails {...props} />

                    }}
                />

                <Route
                    exact path="/portfolio/cohort35" render={props => {
                        return <Cohort35PortfolioDetails {...props} />

                    }}
                />

                <Route
                    exact path="/portfolio/bangazon" render={props => {
                        return <BangazonPortfolioDetails {...props} />

                    }}
                />

                <Route
                    exact path="/resume" render={props => {
                        return <Resume {...props} />

                    }}
                />

                <Route
                    exact path="/contact" render={props => {
                        return <Contact {...props} />

                    }}
                />
            </>
        )
    }
}