import React from 'react';
import {Col, Row} from "react-bootstrap";
import "./ImageTextRow.css"


const ImageTextRow = ({title,body,image,isImageOnTheLeft}) => {
    
    return isImageOnTheLeft?(
        <Row className="align-items-center image-text-row">
            <Col sm={6}>
                <div className="image-text-image-column left">
                    <img src={image} className="image-text-image"
                         alt={title}/>
                </div>
            </Col>

            <Col sm={6}>
                <h2 className="image-text-title">{title}</h2>
                <p className="image-text-body">
                    {body}
                </p>
            </Col>
        </Row>
    ):(
        <Row className="align-items-center image-text-row">
            <Col sm={6}>
                <h2 className="image-text-title">{title}</h2>
                <p className="image-text-body">
                    {body}
                </p>
            </Col>
            <Col sm={6}>
                <div className="image-text-image-column right">
                    <img src={image} className="image-text-image"
                         alt={title}/>
                </div>
            </Col>

        </Row>
    );
};

export default ImageTextRow;