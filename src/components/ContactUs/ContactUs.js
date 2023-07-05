import React from 'react';
import NavBar from "../Reusable Components/NavBar";
import PageBanner from "../Reusable Components/PageBanner";
import ContactForm from "../Reusable Components/ContactForm";
import Footer from "../Reusable Components/Footer";
import {Col, Row} from "react-bootstrap";
import ContentContainer from "../Reusable Components/ContentContainer";
import facebookIcon from "../../assets/facebook-icon.png";
import youtubeIcon from "../../assets/youtube-icon.png";
import instagramIcon from "../../assets/instagram-icon.png";
import contactUsImage from "../../assets/contact-us-image-2.png"
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div>
            <NavBar/>
            <PageBanner title="Contact Us"/>
            <ContactForm image={contactUsImage}/>

            <ContentContainer span={10} topMargin="2rem" bottomMargin="2rem">
                <Row>
                    <Col>
                        <div className="info-card">
                            <h3>Call Us</h3>
                            <h4>630.456.1234</h4>
                            <span><b>Office Hours</b>: M-F 8AM-5PM</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="info-card">
                            <h3>Book a Free Consultation</h3>
                            <button>Book Now</button>
                        </div>
                    </Col>
                    <Col>
                        <div className="info-card">
                            <h3>Follow Us</h3>
                            <div>
                                <div className="social-media-row">
                                    <a href="https://www.facebook.com/tarpsupply/"><img src={facebookIcon}
                                                                                        alt="facebook"/></a>
                                    <a href="https://www.youtube.com/user/tarpsupply">
                                        <img src={youtubeIcon} alt="youtube"/>
                                    </a>
                                    <a href="https://www.instagram.com/tarpsupplyinc/?hl=en">
                                        <img src={instagramIcon} alt="instagram"/>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </Col>


                </Row>
            </ContentContainer>
            <Footer/>
        </div>
    );
};

export default ContactUs;