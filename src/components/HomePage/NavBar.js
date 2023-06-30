import React from 'react';
import Container from 'react-bootstrap/Container';
import brand_icon from '../../assets/proactive-team-icon.png'
import './NavBar.css'
import {Col, Row} from "react-bootstrap";

const NavBar = () => {
    return (

        <Container className="nav-bar" fluid>
            <Row>
                <Col sm={12} className="nav-bar-ribbon"></Col>
            </Row>
            <Row style={{marginTop:"5rem"}}>
                <Col sm={6}>
                    <img src={brand_icon} alt="brand icon" className="brand-icon"/>
                </Col>


                <Col>
                    <Row style={{alignItems: "center"}}>
                        <Col sm={2}>
                            <a href="#services">Services</a>
                        </Col>

                        <Col sm={2}>
                            <a href="#work">Work</a>
                        </Col>

                        <Col sm={2}>
                            <a href="#about">About</a>
                        </Col>

                        <Col sm={2}>
                            <a href="#contact-us">Contact Us</a>
                        </Col>
                        <Col sm={2}>
                            <button className="nav-bar-button">Free Consultation</button>
                        </Col>
                    </Row>


                </Col>

            </Row>
        </Container>

    );
};

export default NavBar;