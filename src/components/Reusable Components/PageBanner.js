import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import './PageBanner.css'

const PageBanner = ({title}) => {
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-sm-center page-banner-container">
                    <Col className="page-banner" sm={10}>
                        <h2>{title}</h2>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default PageBanner;