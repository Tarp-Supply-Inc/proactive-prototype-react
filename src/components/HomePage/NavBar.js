import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brand_icon from '../../assets/proactive-team-icon.png'
import Image from 'react-bootstrap/Image';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="brand-icon-wrapper">
                <img src={brand_icon} alt="brand icon" className="brand-icon"/>
            </div>
            <div className="nav-links">
                <a href="#service">Service</a>
                <a href="#work">Work</a>
                <a href="#about">About</a>
                <a href="#contact-us">Contact Us</a>
            </div>

            <div>
                <button>Get Started</button>
            </div>


        </div>
    );
};

export default NavBar;