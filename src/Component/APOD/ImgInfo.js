import React from "react";

function ImgInfo(props) {
    
    return (
        <div>
            <p>{props.dateInfo}</p>
            <p>{props.imgTitle}</p>
            <p>{props.imgExplanation}</p>
        </div>
    )
}

export default ImgInfo;