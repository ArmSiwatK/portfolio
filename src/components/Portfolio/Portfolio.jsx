import React from 'react';
import PortfolioItem from './PortfolioItem';
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <PortfolioItem
                title="Character Selection Mockup"
                gifSrc="/images/demo1.gif"
                appLink="https://three-character-selection.vercel.app/"
                repoLink="https://github.com/ArmSiwatK/Three-Character-Selection"
            />
            <PortfolioItem
                title="Find Your Hat Challenge Project"
                gifSrc="/images/demo2.gif"
                appLink="https://replit.com/@SiwatArm/JavaScript-Find-My-Hat"
                repoLink=""
            />
        </div>
    );
};

export default Portfolio;