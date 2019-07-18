import React from "react";

import { Container, Divider } from "semantic-ui-react";

function ImgInfo(props) {
    
    return (
        <div>
            <div className="info-container">
                <p className="info-date">Date: {props.dateInfo}</p>
                <p className="info-title">{props.imgTitle}</p>
                <p className="info-explanation">{props.imgExplanation}</p>
            </div>
            <Divider />
            <Container textAlign='right'>
                <p>{props.imgExplanation}</p>
            </Container>
        </div>
        
    )
}

export default ImgInfo;