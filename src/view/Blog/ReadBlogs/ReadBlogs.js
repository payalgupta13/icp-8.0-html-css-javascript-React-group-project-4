import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Blogs } from '../../../config/BlogData';

function ReadBlogs() {
    const { blogId } = useParams();
    const [blogDetails, setBlogDetails] = useState({
        imgUrl: "",
        title: "",
        description: "",
        content: "",
        details: ""
    });

    useEffect(() => {
        const blogObject = Blogs.find((obj) => obj.id === parseInt(blogId, 10));
        if (blogObject) {
            setBlogDetails(blogObject);
        } else {
            setBlogDetails({
                imgUrl: "",
                title: "Blog not found",
                description: "",
                content: "",
                details: ""
            });
        }
    }, [blogId]);

    return (
        <div>
            <p>ID: {blogId}</p>
            <h1>Blogs</h1>
            <img src={blogDetails.imgUrl} alt={blogDetails.title} />
            <h2>{blogDetails.title}</h2>
            <h4>{blogDetails.description}</h4>
            <h5>{blogDetails.content}</h5>
            <h6>{blogDetails.details}</h6>
        </div>
    );
}

export default ReadBlogs;
