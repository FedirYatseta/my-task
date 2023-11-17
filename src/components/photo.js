import React from "react"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imageLogo from '../logo.svg'
const Photo = () => {


    const [image, setPost] = useState([{
        "albumId": 5,
        "id": 243,
        "title": "sed nobis consequatur dolores",
        "url": "https://via.placeholder.com/600/ad65d5",
        "thumbnailUrl": "https://via.placeholder.com/150/ad65d5"
    }])
    console.log('image', image)


    let { userId } = useParams();


    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/albums/${userId}/photos`)
    //         .then(response => response.json())
    //         .then(json => setPost(json))
    // }, [userId])
    return (
        <div style={{ padding: '10px' }}>
            <h2>PHOTO</h2>
            {image.map((item, index) =>
                <div key={index} style={{ padding: '10px', border: '1px solid #cdcdcd', marginBottom: '5px', }}>
                    <div style={{ color: '#000', fontSize: '20px', fontWeight: '600' }}>{item.title}</div>
                    <div style={{ display: 'flex', width: '50px', height: '50px' }}>
                        <img src={imageLogo} alt={'somePhoto'} className="imageAlbum" />
                    </div>
                    <div style={{ display: 'flex', width: '50px', height: '50px' }}>
                        <img src={item.url} alt={'somePhoto'} className="imageAlbum" />
                    </div>
                </div>
            )}
        </div>
    )
};

export default Photo;
