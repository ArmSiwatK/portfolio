import React from 'react';
import PortfolioItem from './PortfolioItem';
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <PortfolioItem
                title="Character Selection Mockup"
                gifSrc="/images/demos/demo1.gif"
                appLink="https://three-character-selection.vercel.app/"
                repoLink="https://github.com/ArmSiwatK/Three-Character-Selection"
            />
            <PortfolioItem
                title="Orange Cat CRUD Web App"
                gifSrc="/images/demos/demo5.gif"
                appLink="https://orangecat.vercel.app/"
                repoLink="https://github.com/lethal1147/frontend-jsd4-groupE"
            />
            <PortfolioItem
                title="Find Your Hat Challenge Project"
                gifSrc="/images/demos/demo2.gif"
                appLink="https://replit.com/@SiwatArm/JavaScript-Find-My-Hat"
                repoLink=""
            />
            <PortfolioItem
                title="Play Multiple YouTube Videos"
                gifSrc="/images/demos/demo3.gif"
                appLink="https://play-multiple-videos.vercel.app/"
                repoLink="https://github.com/ArmSiwatK/play-multiple-videos"
            />
            <PortfolioItem
                title="Bad Apple!! but they're Minecraft"
                gifSrc="/images/demos/demo4.gif"
                appLink="https://youtu.be/n86O1YcHOuU"
                repoLink=""
            />
        </div>
    );
};

export default Portfolio;
