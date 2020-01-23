import React, { Component } from "react";
import HopePortfolioCard from './HopePortfolioCard'
import Cohort35PortfolioCard from './Cohort35PortfolioCard'
import BangazonPortfolioCard from './BangazonPortfolioCard'

class PortfolioList extends Component {
    render() {
        return (
            <>
                <HopePortfolioCard />
                <Cohort35PortfolioCard />
                <BangazonPortfolioCard />
            </>
        )
    }
}

export default PortfolioList