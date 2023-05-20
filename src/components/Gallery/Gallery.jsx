import React, { useState } from 'react';
import "./Gallery.css";

const Gallery = () => {
    const logos = [
        { imageSrc: '/images/logos/html5.png', name: 'HTML5' },
        { imageSrc: '/images/logos/css3.png', name: 'CSS3' },
        { imageSrc: '/images/logos/javascript.png', name: 'JavaScript' },
        { imageSrc: '/images/logos/react.png', name: 'React' },
        { imageSrc: '/images/logos/git.png', name: 'Git' },
        { imageSrc: '/images/logos/node.png', name: 'Node' },
        { imageSrc: '/images/logos/express.png', name: 'Express' },
        { imageSrc: '/images/logos/mongodb.png', name: 'MongoDB' },
        { imageSrc: '/images/logos/blender.png', name: 'Blender' },
    ];

    const [hoveredLogo, setHoveredLogo] = useState(null);

    const handleMouseEnter = (logoName) => {
        setHoveredLogo(logoName);
    };

    const handleMouseLeave = () => {
        setHoveredLogo(null);
    };

    return (
        <div className="gallery">
            {logos.map((logo, index) => (
                <div
                    className="logo-item"
                    key={index}
                    onMouseEnter={() => handleMouseEnter(logo.name)}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={logo.imageSrc} alt={logo.name} className="logo-image" />
                    {hoveredLogo === logo.name && (
                        <div className="logo-name">{logo.name}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Gallery;