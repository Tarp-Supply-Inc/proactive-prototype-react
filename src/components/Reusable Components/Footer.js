import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import facebookIcon from "../../assets/facebook-icon-colored.png";
import youtubeIcon from "../../assets/youtube-icon-colored.png";
import instagramIcon from "../../assets/instagram-icon-colored.png";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-section-wrapper">
            <Container className="footer-section">

                <Row>
                    <Col sm={3}>
                        <div className="footer-section-column-wrapper">
                            <h6>Company</h6>
                            <a href="#">About</a>
                            <a href="#">Solutions</a>
                            <a href="#">Projects</a>
                            <a href="#">Blog</a>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className="footer-section-column-wrapper">
                            <h6>Support</h6>
                            <a href="#">Contact</a>
                            <a href="#">Sitemap</a>
                        </div>


                    </Col>
                    <Col sm={3}>
                        <div className="footer-section-column-wrapper">
                            <h6>Legal</h6>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                            <a href="#">Accessibility</a>
                            <a href="#">Cookies</a>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className="footer-section-column-wrapper">
                            <h6>Join Our Newsletter</h6>
                            <span>Get news, tips and so much more!</span>
                            <form>
                                <div>
                                    <input
                                        type="email"
                                        id="newsletter-email"
                                        placeholder="Enter your email"
                                        className="newsletter-input"
                                    />
                                </div>

                                <button type="submit" id="footer-submit" className="newsletter-submit">Submit
                                </button>
                            </form>
                        </div>
                    </Col>
                </Row>
                <div className="social-media-row">
                    <a href="https://www.facebook.com/tarpsupply/"><img src={facebookIcon} alt="facebook"/></a>
                    <a href="https://www.youtube.com/user/tarpsupply">
                        <img src={youtubeIcon} alt="youtube"/>
                    </a>
                    <a href="https://www.instagram.com/tarpsupplyinc/?hl=en">
                        <img src={instagramIcon} alt="instagram"/>
                    </a>

                </div>
                <hr className="footer-section-divider"/>
                <span
                    className="footer-section-copy-right">© COPYRIGHT 2023 TARP SUPPLY INC. ALL RIGHTS RESERVED.</span>

            </Container>
        </footer>
    );
};

export default Footer;