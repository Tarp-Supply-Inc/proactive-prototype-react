import React from 'react';
import './Services.css'
import NavBar from "../Reusable Components/NavBar";
import {Col, Row} from "react-bootstrap";
import PageBanner from "../Reusable Components/PageBanner";
import marketingImage from '../../assets/marketing-icon.png'
import seoImage from '../../assets/seo-icon.png'
import webDesignImage from '../../assets/web-design-icon.png'
import leadGenerationImage from '../../assets/lead-generation-icon.png'
import fbAdCampaignImage from '../../assets/targeted-facebook-ad-campaign-icon.png'
import webMaintenanceImage from '../../assets/web-maintenance-icon.png'
import Footer from "../Reusable Components/Footer";
import ContentContainer from "../Reusable Components/ContentContainer";
import ActionBanner from "../Reusable Components/ActionBanner";
import ServiceCard from "../Reusable Components/ServiceCard";

const Services = () => {
    return (
        <div>
            <NavBar/>

            <PageBanner title="Services"/>

            {/*services section*/}
            <ContentContainer span={10}>

                <Row>
                    <Col sm={6}>
                        <ServiceCard image={marketingImage} title="Strategic Digital Marketing"
                                     body="Our team of digital marketing experts will develop a tailored strategy to establish and enhance your online presence. From crafting a compelling website to optimizing your search engine rankings and managing your social media profiles, we'll ensure that your brand stays relevant and visible to your local audience."/>
                    </Col>
                    <Col sm={6}>
                        <ServiceCard image={seoImage} title="On-page SEO Optimization"
                                     body="Boost your visibility on search engines and increase your chances of being found by potential customers in your area. Our local SEO strategies will optimize your online listings, target relevant keywords, and improve your local search rankings, helping you outshine your competitors and attract more foot traffic."/>
                    </Col>




                    <Col sm={6}>
                        <ServiceCard image={fbAdCampaignImage} title="Targeted Facebook Ad Campaigns"
                                     body="Boost your visibility on search engines and increase your chances of being found by potential customers in your area. Our local SEO strategies will optimize your online listings, target relevant keywords, and improve your local search rankings, helping you outshine your competitors and attract more foot traffic."/>
                    </Col>
                    <Col sm={6}>
                        <ServiceCard image={webDesignImage} title="Website Design and Development"
                                     body="Boost your visibility on search engines and increase your chances of being found by potential customers in your area. Our local SEO strategies will optimize your online listings, target relevant keywords, and improve your local search rankings, helping you outshine your competitors and attract more foot traffic."/>
                    </Col>


                
                    <Col sm={6}>
                        <ServiceCard image={webMaintenanceImage} title="Website Maintenance"
                                     body="Boost your visibility on search engines and increase your chances of being found by potential customers in your area. Our local SEO strategies will optimize your online listings, target relevant keywords, and improve your local search rankings, helping you outshine your competitors and attract more foot traffic."/>
                    </Col>

                    <Col sm={6}>
                        <ServiceCard image={leadGenerationImage} title="Lead Generation"
                                     body="In the competitive landscape of small local businesses, generating high-quality leads is crucial for sustained growth and success. At Proactive Marketing, we specialize in Lead Generation strategies that connect you with potential customers who are genuinely interested in your products or services. With our tailored approach, we'll help you expand your customer base and drive revenue like never before."/>
                    </Col>

                </Row>


            </ContentContainer>

            {/*<img src={heroImage} alt="Check out our services" className="services-hero-image"/>*/}
            {/*<ContentContainer span={7} topMargin="8rem" bottomMargin="8rem">*/}
            {/*    <Row className="service-row">*/}
            {/*        <Col sm={4}>*/}
            {/*            <img src={marketingImage} alt="Strategic Digital Marketing" className="service-image"/>*/}
            {/*        </Col>*/}
            {/*        <Col className="service-row-2nd-column">*/}
            {/*            <h3>Strategic Digital Marketing</h3>*/}
            {/*            <p>*/}
            {/*                Our team of digital marketing experts will develop a tailored strategy to establish*/}
            {/*                and enhance your online presence. From crafting a compelling website to optimizing*/}
            {/*                your search engine rankings and managing your social media profiles, we'll ensure*/}
            {/*                that your brand stays relevant and visible to your local audience.*/}
            {/*            </p>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}

            {/*    <Row className="service-row">*/}
            {/*        <Col sm={4}>*/}
            {/*            <img src={seoImage} alt="Technical & Local SEO Optimization" className="service-image"/>*/}
            {/*        </Col>*/}
            {/*        <Col className="service-row-2nd-column">*/}
            {/*            <h3>Technical & Local SEO Optimization</h3>*/}
            {/*            <p>*/}
            {/*                Boost your visibility on search engines and increase your chances of being found by*/}
            {/*                potential customers in your area. Our local SEO strategies will optimize your online*/}
            {/*                listings, target relevant keywords, and improve your local search rankings, helping*/}
            {/*                you outshine your competitors and attract more foot traffic.*/}
            {/*            </p>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}

            {/*    <Row className="service-row">*/}
            {/*        <Col sm={4}>*/}
            {/*            <img src={webDesignImage} alt="Website Design and Development"*/}
            {/*                 className="service-image"/>*/}
            {/*        </Col>*/}
            {/*        <Col className="service-row-2nd-column">*/}
            {/*            <h3>Website Design and Development</h3>*/}
            {/*            <p>*/}
            {/*                Boost your visibility on search engines and increase your chances of being found by*/}
            {/*                potential customers in your area. Our local SEO strategies will optimize your online*/}
            {/*                listings, target relevant keywords, and improve your local search rankings, helping*/}
            {/*                you outshine your competitors and attract more foot traffic.*/}
            {/*            </p>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}


            {/*    <Row className="service-row">*/}
            {/*        <Col sm={4}>*/}
            {/*            <img src={webManagementImage} alt="Website Management" className="service-image"/>*/}
            {/*        </Col>*/}
            {/*        <Col className="service-row-2nd-column">*/}
            {/*            <h3>Website Management</h3>*/}
            {/*            <p>*/}
            {/*                Boost your visibility on search engines and increase your chances of being found by*/}
            {/*                potential customers in your area. Our local SEO strategies will optimize your online*/}
            {/*                listings, target relevant keywords, and improve your local search rankings, helping*/}
            {/*                you outshine your competitors and attract more foot traffic.*/}
            {/*            </p>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}

            {/*    <Row className="service-row">*/}
            {/*        <Col sm={4}>*/}
            {/*            <img src={leadGenerationImage} alt="Lead Generation" className="service-image"/>*/}
            {/*        </Col>*/}
            {/*        <Col className="service-row-2nd-column">*/}
            {/*            <h3>Lead Generation</h3>*/}
            {/*            <p>*/}
            {/*                In the competitive landscape of small local businesses, generating high-quality*/}
            {/*                leads is crucial for sustained growth and success. At Proactive Marketing, we*/}
            {/*                specialize in Lead Generation strategies that connect you with potential customers*/}
            {/*                who are genuinely interested in your products or services. With our tailored*/}
            {/*                approach, we'll help you expand your customer base and drive revenue like never*/}
            {/*                before.*/}
            {/*            </p>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}


            {/*</ContentContainer>*/}

            <ActionBanner/>


            <Footer/>

        </div>
    );
};

export default Services;