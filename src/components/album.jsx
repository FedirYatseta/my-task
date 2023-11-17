import React from "react"
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Album = () => {


    const [post, setPost] = useState([])


    let { userId } = useParams();


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${userId}`)
            .then(response => response.json())
            .then(json => setPost(json))
    }, [userId])
    return (
        <div style={{ padding: '10px' }}>
            <h2>Album</h2>

            {post.map((item, index) =>
                <div key={index} style={{ padding: '10px', border: '1px solid #cdcdcd', marginBottom: '5px', }}>
                    <div style={{ color: '#000', fontSize: '20px', fontWeight: '600', margin: '5px' }}>{item.title}</div>
                    <Link className='btnLink' to={`photo/${item.id}`}>Переглянути Фото</Link>
                </div>
            )}
        </div>
    )
};

export default Album;
