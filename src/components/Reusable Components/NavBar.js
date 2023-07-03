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
            <Row style={{marginTop: "5rem"}}>
                <Col sm={6}>
                    <img src={brand_icon} alt="brand icon" className="brand-icon"/>
                </Col>


                <Col>
                    <Row style={{alignItems: "center"}}>
                        <Col sm={2}>
                            <a href="#services" className="nav-bar-link">Services</a>
                        </Col>

                        <Col sm={2}>
                            <a href="#work" className="nav-bar-link">Portfolio</a>
                        </Col>

                        <Col sm={2}>
                            <a href="#about" className="nav-bar-link">Packages</a>
                        </Col>

                        <Col sm={2}>
                            <a href="#contact-us" className="nav-bar-link">About</a>
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