import React from 'react';
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <section className="about-section">
            <div className="about-text">
                <h2>Call me Arm!</h2>
                <p>
                    I am learning software development.
                    Being here means you're checking out my little portfolio!
                    Let's see if me at this point can make you a good impression.
                </p>
            </div>
            <div className="about-photo">
                <img src="/images/profile.png" alt="Arm" />
            </div>
        </section>
    );
};

export default AboutMe;