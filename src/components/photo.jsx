import React from "react"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Photo = () => {


    const [image, setPost] = useState([])

    let { userId } = useParams();
    const fetchData = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/albums/${userId}/photos`)
            .then(response => response.json())
            .then(json => setPost(json))

    }


    useEffect(() => {
        fetchData()
    }, [userId])
    return (
        <div style={{ padding: '10px' }}>
            <h2>PHOTO</h2>
            {image && image.map((item, index) =>
                <div key={index} style={{ padding: '10px', border: '1px solid #cdcdcd', marginBottom: '5px', }}>
                    <div style={{ color: '#000', fontSize: '20px', fontWeight: '600' }}>{item.title}</div>

                    <div style={{ display: 'flex', width: '50px', height: '50px' }}>
                        <a href={item.url} rel="noreferrer" target="_blank" >{item.url}  </a>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Photo;
