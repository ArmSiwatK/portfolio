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
                title="Project 2"
                gifSrc="/path/to/project2.gif"
                appLink="https://example.com/project2"
                repoLink="https://github.com/yourusername/project2"
            />
        </div>
    );
};

export default Portfolio;