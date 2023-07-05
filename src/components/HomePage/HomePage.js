import React from 'react';
import NavBar from "../Reusable Components/NavBar";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import './HomePage.css'
import heroSectionImage from '../../assets/hero-section-image.png'
import webDesignImage from '../../assets/web-design-icon.png'
import marketingImage from '../../assets/marketing-icon.png'
import socialMediaImage from '../../assets/social-media-icon.png'
import seoImage from '../../assets/seo-icon.png'
import caseStudyImage from '../../assets/case-study-image.png'
import whyProactiveTeamImage from '../../assets/why-proactive-team-image.png'
import contactUsImage from '../../assets/contact-us-image.png'
import Footer from "../Reusable Components/Footer";
import ContactForm from "../Reusable Components/ContactForm";

const HomePage = () => {
    return (
        <div>
            <NavBar/>

            {/* hero section*/}
            <Container className="hero-section" fluid>
                <Row className="hero-section-first-row">
                    <Col sm={5}>
                        <div className="hero-section-message-container">
                            <h1> Helping Your Business</h1>
                            <h1> Stand Out</h1>
                        </div>

                        <button className="hero-section-button">Book Now</button>

                    </Col>

                    <Col sm={6}>
                        <img src={heroSectionImage} alt="helping local businesses out" className="hero-section-image"/>
                    </Col>
                </Row>

                <Row className="justify-content-center hero-section-second-row">
                    <Col className="grow-business-banner" sm={9}>
                        <h2>We offer the digital solutions to grow your business</h2>
                    </Col>

                </Row>
            </Container>


            {/*services section*/}

            <Container className="services-section" fluid>
                <Row className="align-items-center">
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
                        <Row>
                            <Col sm={6}>
                                <div className="service-container">
                                    <img src={webDesignImage} alt="Web Design"/>
                                    <h2>Web Design</h2>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="service-container">
                                    <img src={marketingImage} alt="Marketing"/>
                                    <h2>Digital Marketing</h2>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="service-container">
                                    <img src={socialMediaImage} alt="Social Media"/>
                                    <h2>Social Media</h2>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="service-container">
                                    <img src={seoImage} alt="SEO"/>
                                    <h2>SEO & SEM</h2>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            {/*case study section*/}

            <Container className="case-study-section" fluid>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <div className="case-study-section-left-column">
                            <img src={caseStudyImage} className="case-study-image" alt="Case Study"/>
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

            {/*Why Proactive Team section*/}
            <Container className="why-proactive-team-section" fluid>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <div className="why-proactive-team-section-left-column">
                            <h2 className="why-proactive-team-section-left-column-title">Why Proactive Team?</h2>
                            <p className="why-proactive-team-section-left-column-paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut mollis enim. Fusce
                                aliquam fringilla sapien, et viverra elit viverra ut. Etiam interdum iaculis nunc et
                                faucibus. Vestibulum eu quam a nunc venenatis interdum venenatis. Pellentesque pulvinar
                                odio nec arcu maximus vestibulum.
                            </p>

                            <button className="why-proactive-team-section-left-column-button">
                                Learn More
                            </button>
                        </div>
                    </Col>

                    <Col sm={6}>
                        <div className="why-proactive-team-section-right-column">
                            <img src={whyProactiveTeamImage} alt="Why Proactive Team?"
                                 className="why-proactive-team-image"/>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/*Testimonials section*/}
            <Container className="testimonial-section" fluid>
                <Row className="justify-content-center">
                    <Col className="testimonial-section-first-row-inner-wrapper" sm={10}>
                        <div className="testimonial-wrapper">
                            <h2 className="testimonial-title">What Our Clients Are Saying</h2>
                            <p className="testimonial-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut mollis enim. Fusce
                                aliquam fringilla sapien, et viverra elit viverra ut. Etiam interdum iaculis nunc et
                                faucibus.
                            </p>
                            <span className="testimonial-giver">Mike D.</span>
                        </div>

                    </Col>

                </Row>

            </Container>

            {/*Contact us section*/}
            {/*TODO: make smaller*/}
            <ContactForm image={contactUsImage}/>

            {/*footer*/}
            <Footer/>

        </div>
    );
};

export default HomePage;