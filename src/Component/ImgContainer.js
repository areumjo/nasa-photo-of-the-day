import React, {useState, useEffect} from "react";
import axios from "axios"; 

function IamgeContainer () {
    const [images, setImages] = useState('');
    const [dateInfo, setDateInfo] = useState('2012-03-14');
    useEffect( () => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-12`)
            .then(response => {
                console.log(response.data)
                const imgUrl = response.data.url;
                setImages(imgUrl);
                const imgDate = response.data.date;
            })
            .catch(err => console.log("NASA API is down"))
    }, [])

    return (
        <div>
            <img src={images} alt="NASA APOD"/>
            
        </div>
    )
}

export default IamgeContainer;