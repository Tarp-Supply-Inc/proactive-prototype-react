import React from 'react';
import NavBar from "../Reusable Components/NavBar";
import PageBanner from "../Reusable Components/PageBanner";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Portfolio.css'
import {Col, Row} from "react-bootstrap";
import ContentContainer from "../Reusable Components/ContentContainer";
import tarpSupplyImage from "../../assets/tarp-supply-website-image.png"
import Footer from "../Reusable Components/Footer";
import portfolioImage from "../../assets/portfolio-page-image.png"

const Portfolio = () => {
    return (
        <div>
            <NavBar/>
            <PageBanner title="Portfolio"/>

            <ContentContainer>

                <div className="carousel-container">
                    <AwesomeSlider className="carousel">
                        <div>
                            <Row className="align-items-center">
                                <Col sm={{span:5,offset:1}}>
                                    <img src={tarpSupplyImage} alt="Tarp Supply Inc." className="carousel-image"/>
                                </Col>
                                <Col sm={5}>
                                    <h3 className="carousel-title">Tarp Supply Inc.</h3>
                                    <p className="carousel-body">
                                        Our team of digital marketing experts will develop a tailored strategy to
                                        establish and enhance your online presence. From crafting a compelling website
                                        to optimizing your search engine rankings and managing your social media
                                        profiles, we'll ensure that your brand stays relevant and visible to your local
                                        audience.
                                    </p>
                                    <button className="carousel-button">Learn More</button>
                                </Col>
                            </Row>
                        </div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </AwesomeSlider>
                </div>
            </ContentContainer>
            <div className="portfolio-page-image-container">
                <img src={portfolioImage} alt="Girl With Arrow" className="portfolio-page-image"/>
            </div>

            <Footer/>


        </div>
    );
};

export default Portfolio;