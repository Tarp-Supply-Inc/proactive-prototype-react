import React from 'react';
import './AboutUs.css'
import NavBar from "../Reusable Components/NavBar";
import PageBanner from "../Reusable Components/PageBanner";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import drivingLocalBusinessImage from "../../assets/driving-local-business-image.png"
import weUnderstandImage from "../../assets/we-understand-your-challenges-image.png"
const AboutUs = () => {
    return (
        <div>
            <NavBar/>
            <PageBanner title="About Us"/>

            <Container className="main-container" fluid>
                <Row>
                    <Col className="inner-wrapper" sm={{offset: 1, span: 10}} >
                        <Row className="align-items-center">
                            <Col sm={6}>
                                <div className="about-us-image-column">
                                    <img src={drivingLocalBusinessImage} className="about-us-image"
                                         alt="Driving Local Business"/>
                                </div>
                            </Col>

                            <Col sm={6}>
                                <h2 className="about-us-title">Driving Local Business Success</h2>
                                <p className="about-us-text">
                                    At Proactive Marketing, we are a young and dynamic agency with a passion for helping local
                                    businesses achieve their full potential in the digital realm. With a wealth of expertise and
                                    a finger on the pulse of the latest marketing trends, we specialize in website redesign and
                                    crafting impactful marketing campaigns that empower businesses to thrive in today's
                                    competitive landscape.
                                </p>
                            </Col>
                        </Row>

                        <Row className="align-items-center">
                            <Col sm={6}>
                                <h2 className="about-us-title">We understand your challenges</h2>
                                <p className="about-us-text">
                                    We understand the unique challenges faced by small local businesses in capturing the
                                    attention of their target audience and staying ahead of the curve. That's why we have
                                    dedicated ourselves to providing innovative solutions that elevate your online presence,
                                    captivate your customers, and drive tangible results.
                                </p>
                            </Col>
                            <Col sm={6}>
                                <div className="about-us-image-column">
                                    <img src={weUnderstandImage} className="about-us-image"
                                         alt="We understand your challenges"/>
                                </div>
                            </Col>

                        </Row>

                        <Row>
                         
                        </Row>


                    </Col>
                </Row>



            </Container>


        </div>
    );
};

export default AboutUs;