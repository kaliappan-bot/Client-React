import React from 'react';
import './HeroSection.css';
import banner from '../assets/banner.jpg';
import { Link } from 'react-router-dom';
const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-background" />
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1>Empowering Automation at the Grassroots</h1>
                    <p>iBots Meikavalputhur Office</p>
                    <Link to="/register">
                    <button className="hero-button">Register as Employee</button></Link>
                    <Link to="/login">
                    <button className="hero-button secondary">Login to Portal</button></Link>
                </div>
            </div>
        </section>
    );
};
export default HeroSection;