import React from 'react';
import NavBar from "./NavBar";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import './HomePage.css'
import heroSectionImage from '../../assets/hero-section-image.png'
import webDesignImage from '../../assets/web-design-icon.png'
import marketingImage from '../../assets/marketing-icon.png'

const HomePage = () => {
    return (
        <div>
            <NavBar/>

            {/* hero section*/}
            <Container className="hero-section" fluid>
                <Row className="hero-section-first-row">
                    <Col sm={5}>
                        <div className="hero-section-message-container">
                            <h1> Helping Local</h1>
                            <h1> Businesses Stand Out</h1>
                        </div>

                        <button className="hero-section-button">Get Started Now</button>

                    </Col>

                    <Col sm={6}>
                        <img src={heroSectionImage} alt="helping local businesses out" className="hero-section-image"/>
                    </Col>
                </Row>

                <Row className="justify-content-sm-center hero-section-second-row">
                    <Col className="grow-business-banner" sm={10}>
                        <h2>Everything you need to grow your business</h2>
                    </Col>

                </Row>
            </Container>


            {/*services section*/}

            <Container className="services-section" fluid>
                <Row className="services-section-first-row">
                    <Col sm={6}>
                        <Row>
                            <Col sm={12}>
                                <h2 className="services-section-first-row-title">Services</h2>
                            </Col>
                            <Col sm={10}>
                                <p className="services-section-first-row-paragraph">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Alias aliquam blanditiis
                                    consequatur dolorum eum fuga illo modi molestiae mollitia numquam omnis quas quidem
                                    quod recusandae, rerum tenetur ut veniam? Animi consequatur culpa fuga laborum odio
                                    porro quas quisquam reiciendis saepe, sapiente suscipit voluptates. Dolor dolorem ea
                                    fuga optio quod sunt!</p>
                            </Col>
                            <Col sm={12}>
                                <button className="services-section-first-row-button">Learn More</button>
                            </Col>
                        </Row>
                    </Col>

                    <Col sm={5}>
                        <Row className="services-offered-container">
                            <Col sm={6}>
                                <div className="service-container">
                                    <img src={webDesignImage} alt="Web Design"/>
                                    <h2>Web Design</h2>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="service-container">
                                    <img src={marketingImage} alt="Marketing"/>
                                    <h2>Marketing</h2>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="service-container">
                                    <h2>Social Media Management</h2>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="service-container">
                                    <h2>SEO</h2>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            {/*case study section*/}

            <Container className="case-study-section" fluid>
                <Row className="case-study-section-first-row">
                    <Col sm={6}>
                        <div className="case-study-section-left-column">

                        </div>
                    </Col>

                    <Col>
                        <div className="case-study-section-right-column">
                            <h2 className="case-study-section-right-column-title">Case Study: Tarp Supply Inc.</h2>
                            <p className="case-study-section-right-column-paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut mollis enim. Fusce
                                aliquam fringilla sapien, et viverra elit viverra ut. Etiam interdum iaculis nunc et
                                faucibus. Vestibulum eu quam a nunc venenatis interdum venenatis. Pellentesque pulvinar
                                odio nec arcu maximus vestibulum.
                            </p>

                            <button className="case-study-section-right-column-button">
                                Learn More
                            </button>
                        </div>
                    </Col>
                </Row>


            </Container>

            {/*About us section*/}
            <Container className="about-us-section" fluid>
                <Row className="about-us-section-first-row">
                    <Col sm={6}>
                        <div className="about-us-section-left-column">
                            <h2 className="about-us-section-left-column-title">About Us</h2>
                            <p className="about-us-section-left-column-paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut mollis enim. Fusce
                                aliquam fringilla sapien, et viverra elit viverra ut. Etiam interdum iaculis nunc et
                                faucibus. Vestibulum eu quam a nunc venenatis interdum venenatis. Pellentesque pulvinar
                                odio nec arcu maximus vestibulum.
                            </p>

                            <button className="about-us-section-left-column-button">
                                Learn More
                            </button>
                        </div>
                    </Col>

                    <Col>
                        <div className="about-us-section-right-column">

                        </div>
                    </Col>
                </Row>
            </Container>

            {/*Testimonials section*/}
            <Container className="testimonial-section" fluid>
                <Row className="testimonial-section-first-row">
                    <Col>

                        <h2 className="testimonial-section-title">Testimonials</h2>
                    </Col>

                </Row>
                <Row className="testimonial-section-second-row">
                    <div className="testimonial-section-second-row-inner-wrapper">
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </div>

                </Row>
            </Container>


        </div>
    );
};

export default HomePage;