import React from "react";

function ImgInfo(props) {
    
    return (
        <div className="info-container">
            <p className="info-date">Date: {props.dateInfo}</p>
            <p className="info-title">{props.imgTitle}</p>
            <p className="info-explanation">{props.imgExplanation}</p>
        </div>
    )
}

export default ImgInfo;