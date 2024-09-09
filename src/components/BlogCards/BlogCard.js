import React from 'react'
import "./BlogCard.css";

function BlogCard({imgUrl,title,description, details}) {
  return (
    <div>
        <img src={imgUrl} />
        <h1>{title}</h1>
        <p>{description}</p>
        <h4>{details}</h4>
    </div>
  )
}

export default BlogCard