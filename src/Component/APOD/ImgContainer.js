import React, {useState, useEffect} from "react";
import axios from "axios"; 

import { Container, Divider } from "semantic-ui-react";
import { Button, Title } from "./StyleWidgets.js";
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
            <div className="btn-container">
                <Container textAlign='left'>
                    <Title>Button from styled-component</Title>
                    <Button onClick={ () => setDateInfo('2019-07-11')}>2019-07-11</Button>
                    <Button onClick={ () => setDateInfo('2019-07-07')}>2019-07-07</Button>
                    <Button onClick={ () => setDateInfo('2019-07-06')}>2019-07-06</Button>
                    <Button onClick={ () => setDateInfo('2019-07-05')}>2019-07-05</Button>
                    <Button onClick={ () => setDateInfo('2019-07-04')}>2019-07-04</Button>
                    <Button onClick={ () => setDateInfo('2019-07-02')}>2019-07-02</Button>
                    <Button onClick={ () => setDateInfo('2019-07-01')}>2019-07-01</Button>
                    <Divider /> 
                </Container>
                
                                   
                <button
                    onClick={ () => setDateInfo('2019-07-11')}>2019-07-11</button>
                <button
                    onClick={ () => setDateInfo('2019-07-07')}>2019-07-07</button>
                <button
                    onClick={ () => setDateInfo('2019-07-06')}>2019-07-06</button>
                <button
                    onClick={ () => setDateInfo('2019-07-05')}>2019-07-05</button>
                <button
                    onClick={ () => setDateInfo('2019-07-04')}>2019-07-04</button>
                <button
                    onClick={ () => setDateInfo('2019-07-02')}>2019-07-02</button>
                <button
                    onClick={ () => setDateInfo('2019-07-01')}>2019-07-01</button>
            </div>
            <img className="apod" src={images} alt="NASA APOD"/>
            <ImgInfo dateInfo={dateInfo} imgTitle={imgTitle} imgExplanation={imgExplanation}/>
        </div>
    )
}

export default IamgeContainer;