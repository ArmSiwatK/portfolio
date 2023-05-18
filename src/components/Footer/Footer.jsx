import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-contact">
                <div className="footer-info">
                    <FaEnvelope className="footer-icon" />
                    <a href="mailto:arm.siwatk@gmail.com" className="footer-text">arm.siwatk@gmail.com</a>
                </div>
                <div className="footer-info">
                    <FaPhone className="footer-icon" />
                    <a href="tel:+66-92-260-7400" className="footer-text">+66-92-260-7400</a>
                </div>
            </div>
            <div className="footer-social">
                <a href="https://www.linkedin.com/in/arm-siwatk/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="footer-icon" />
                </a>
                <a href="https://github.com/ArmSiwatK" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="footer-icon" />
                </a>
                <a href="https://drive.google.com/file/d/1pXCG6ZQdHg_pCxJek8t3UfePInzWTj5b/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <FaFileAlt className="footer-icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;