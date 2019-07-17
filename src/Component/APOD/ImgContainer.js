import React, {useState, useEffect} from "react";
import axios from "axios"; 

import ImgInfo from "./ImgInfo.js";

function IamgeContainer () {
    const [images, setImages] = useState('');
    const [dateInfo, setDateInfo] = useState('2019-07-11');
    const [imgTitle, setImgTitle] = useState('');
    const [imgExplanation, setImgExplanation] = useState('');
    
    useEffect( () => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=siPBVzNtincbzCWCIeqY1XwiUxucLQXV86uLFkez&date=${dateInfo}`)
            .then(response => {
                const imgUrl = response.data.url;
                setImages(imgUrl);
                const imgDate = response.data.date;
                setDateInfo(imgDate);
                setImgTitle(response.data.title);
                setImgExplanation(response.data.explanation);
            })
            .catch(err => console.log("NASA API is down: ", err))
    }, [dateInfo])

    return (
        <div>
            <button
                onClick={ () => setDateInfo('2019-07-07')}>2019-07-07</button>
            <button
                onClick={ () => setDateInfo('2019-07-06')}>2019-07-09</button><br/>
            <img src={images} alt="NASA APOD"/>
            <ImgInfo dateInfo={dateInfo} imgTitle={imgTitle} imgExplanation={imgExplanation}/>
        </div>
    )
}

export default IamgeContainer;