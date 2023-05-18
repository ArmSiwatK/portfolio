import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [screenSize, setScreenSize] = useState('');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1100) {
                setScreenSize('Siwat “Arm” Kanjanapanitkun');
            } else if (width >= 576) {
                setScreenSize('Siwat K. (Arm)');
            } else {
                setScreenSize('Arm');
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial screen size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="nav">
            <div className="logo">{screenSize}</div>
        </nav>
    );
};

export default NavBar;