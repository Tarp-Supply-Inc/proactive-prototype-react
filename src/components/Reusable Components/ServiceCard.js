import React from 'react';
import './ServiceCard.css'
import {Col, Row} from "react-bootstrap";

const ServiceCard = ({image,title,body}) => {
    return (
        <Row className="service-row">
            <Col sm={3}>
                <img src={image} alt={title} className="service-image"/>
            </Col>
            <Col className="service-row-2nd-column">
                <h3>{title}</h3>
                <p>
                    {body}
                </p>
            </Col>
        </Row>
    );
};

export default ServiceCard;