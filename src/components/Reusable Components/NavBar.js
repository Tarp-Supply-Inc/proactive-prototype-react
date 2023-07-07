import React from 'react';
import Container from 'react-bootstrap/Container';
import brand_icon from '../../assets/proactive-team-icon.png'
import './NavBar.css'
import {Col, Row} from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom';


const NavBar = () => {
    const navigate = useNavigate();

    return (

        <Container className="nav-bar" fluid>
            <Row>
                <Col sm={12} className="nav-bar-ribbon"></Col>
            </Row>
            <Row style={{marginTop: "5rem"}}>

                <Col sm={6}>
                    <Link to="/">
                        <img src={brand_icon} alt="brand icon" className="brand-icon"/>
                    </Link>

                </Col>


                <Col>
                    <Row style={{alignItems: "center"}}>
                        <Col sm={2}>
                            <a href="/services" className="nav-bar-link">Services</a>
                        </Col>

                        <Col sm={2}>
                            <a href="/portfolio" className="nav-bar-link">Portfolio</a>
                        </Col>


                        <Col sm={2}>
                            <a href="/about" className="nav-bar-link">About</a>
                        </Col>
                        <Col sm={2}>
                            <button className="nav-bar-button" onClick={() => {
                                navigate('/contact-us')
                            }}>Free Consultation
                            </button>
                        </Col>
                    </Row>


                </Col>

            </Row>
        </Container>

    );
};

export default NavBar;