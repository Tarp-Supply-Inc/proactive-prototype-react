import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

const ContentContainer = ({children, span, topMargin, bottomMargin}) => {
    return (
        <Container fluid style={{
            marginTop: topMargin ? topMargin : "1rem",
            marginBottom: bottomMargin ? bottomMargin : "1rem"
        }}>

            <Row>
                <Col className="services-wrapper" sm={{offset: 1, span: span ? span : 10}}>
                    {children}
                </Col>

            </Row>

        </Container>
    );
};

export default ContentContainer;