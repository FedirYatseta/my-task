import React from "react"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Post = () => {

    const [post, setPost] = useState([])


    let { userId } = useParams();


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`)
            .then(response => response.json())
            .then(json => setPost(json))
    }, [userId])
    return (
        <div style={{ padding: '10px' }}>
            <h2>Post</h2>
            {post.map((item, index) =>
                <div key={index} style={{ padding: '10px', border: '1px solid #cdcdcd', marginBottom: '5px' }}>
                    <div style={{ color: '#000', fontSize: '20px', fontWeight: '600' }}>{item.title}</div>
                    <div style={{ color: '#000', }}>{item.body}</div>
                </div>
            )}
        </div>
    )
};

export default Post;
