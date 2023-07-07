import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import './ContactForm.css'

const ContactForm = ({image}) => {
    return (
        <Container className="contact-us-section" fluid>

            <h2 className="contact-us-title">Ready To Grow Your Business?</h2>

            <Row>
                <Col sm={6}>
                    <form className="contact-us-form">
                        <div>
                            <label htmlFor="name">Full Name</label> <br/>
                            <input
                                type="text"
                                id="name"

                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label> <br/>
                            <input
                                type="email"
                                id="email"
                            />
                        </div>

                        <div>
                            <label htmlFor="name">Company Name</label><br/>
                            <input
                                type="text"
                                id="company-name"

                            />
                        </div>

                        <div>
                            <label htmlFor="name">What services are you interested in?</label><br/>
                            <select>
                                <option value=""></option>
                                <option value="web design">Web Design</option>
                                <option value="digital marketing">Digital Marketing</option>
                                <option value="social media">Social Media</option>
                                <option value="seo&sem">SEO & SEM</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message">Message</label> <br/>
                            <textarea id="message" rows="4" cols="50"></textarea>
                        </div>
                        <button type="submit" className="contact-us-form-button">Send Message</button>
                    </form>
                </Col>
                <Col sm={6}>
                    <img src={image} alt="Contact Us" className="contact-us-image"/>
                </Col>
            </Row>

        </Container>
    );
};

export default ContactForm;