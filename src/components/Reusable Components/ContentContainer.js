import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

const ContentContainer = ({children,span,topMargin,bottomMargin}) => {
    return (
        <Container fluid style={{marginTop:topMargin,marginBottom:bottomMargin}}>

            <Row>
                <Col className="services-wrapper" sm={{offset: 1, span: span}}>
                    {children}
                </Col>

            </Row>

        </Container>
    );
};

export default ContentContainer;