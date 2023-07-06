import React from 'react';
import './AboutUs.css'
import NavBar from "../Reusable Components/NavBar";
import PageBanner from "../Reusable Components/PageBanner";
import drivingLocalBusinessImage from "../../assets/driving-local-business-image.png"
import weUnderstandImage from "../../assets/we-understand-your-challenges-image.png"
import Footer from "../Reusable Components/Footer";
import ContentContainer from "../Reusable Components/ContentContainer";
import weGoExtraMile from "../../assets/we-go-extra-mile-image.png"
import proactiveTeamApproach from "../../assets/proactive-team-approach-image.png"
import ActionBanner from "../Reusable Components/ActionBanner";
import ImageTextRow from "../Reusable Components/ImageTextRow";

const AboutUs = () => {
    return (
        <div>
            <NavBar/>
            <PageBanner title="About Us"/>

            <ContentContainer span={10} topMargin="2rem" bottomMargin="2rem">
                <ImageTextRow image={drivingLocalBusinessImage} title="Driving Local Business Success" body="At Proactive Marketing, we are a young and dynamic agency with a passion for helping
                            local
                            businesses achieve their full potential in the digital realm. With a wealth of
                            expertise and
                            a finger on the pulse of the latest marketing trends, we specialize in website
                            redesign and
                            crafting impactful marketing campaigns that empower businesses to thrive in today's
                            competitive landscape." isImageOnTheLeft={true}/>
                <ImageTextRow image={weUnderstandImage} title="We Understand Your Challenges" body=" We understand the unique challenges faced by small local businesses in capturing the
                            attention of their target audience and staying ahead of the curve. That's why we
                            have
                            dedicated ourselves to providing innovative solutions that elevate your online
                            presence,
                            captivate your customers, and drive tangible results." isImageOnTheLeft={false}/>


                <div className="about-us-testimonial-wrapper">

                    <h2 className="about-us-testimonial-title">Websites That Convert</h2>


                    <p className="about-us-testimonial-body">
                        Our talented team collaborate closely with each client to understand their unique vision, goals,
                        and brand identity. We believe that a successful website is not just visually appealing but also
                        intuitive, user-friendly, and optimized for conversions. Whether you need a complete website
                        overhaul or a simple refresh, we'll leverage our expertise to create a digital experience that
                        reflects your brand's personality and drives customer engagement.
                    </p>

                </div>


                <ImageTextRow image={weGoExtraMile} title="Going The Extra Mile" body="But we don't stop at website redesign alone. We understand that a successful online
                            presence requires a comprehensive marketing strategy. Our team excels in developing
                            customized marketing campaigns that leverage the power of various channels and
                            platforms to ensure maximum reach and impact. From social media management and
                            targeted advertising to search engine optimization and content marketing, we'll work
                            tirelessly to drive qualified leads to your business and help you achieve remarkable
                            growth." isImageOnTheLeft={false}/>

                <ImageTextRow image={proactiveTeamApproach} title="The Proactive Team Approach" body="What sets us apart is our proactive approach. We don't simply react to trends or
                            industry changes – we anticipate them. We stay ahead of the curve by continuously
                            learning, refining our strategies, and implementing cutting-edge techniques. Our
                            goal is to be your trusted partner, guiding you through the ever-evolving digital
                            landscape and empowering you with the tools and knowledge to succeed. At Proactive
                            Marketing, we are driven by our commitment to your success. We believe that when
                            local businesses thrive, communities thrive. That's why we pour our passion,
                            creativity, and expertise into every project we undertake. We measure our success by
                            your success, and we won't rest until we've helped you achieve your goals and
                            surpass your expectations." isImageOnTheLeft={true}/>


                <ActionBanner marginTop="1rem" marginBottom="1rem"/>
            </ContentContainer>


            <Footer/>

        </div>
    );
};

export default AboutUs;