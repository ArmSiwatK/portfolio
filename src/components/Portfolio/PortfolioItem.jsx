import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const PortfolioItem = ({ title, gifSrc, appLink, repoLink }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="portfolio-item">
            <h3 className="portfolio-title">{title}</h3>
            <img src={gifSrc} alt={title} className="portfolio-gif" />
            <div className="portfolio-buttons">
                {appLink && (
                    <button
                        className={isMobile ? 'view-button' : ''}
                        onClick={() => window.open(appLink, '_blank')}
                    >
                        {isMobile ? 'View' : 'View Application'}
                    </button>
                )}
                {repoLink && (
                    <button
                        className={isMobile ? 'repo-button' : ''}
                        onClick={() => window.open(repoLink, '_blank')}
                    >
                        {isMobile ? 'Repo' : 'GitHub Repository'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default PortfolioItem;