import React from 'react'
import "./BlogCard.css";

function BlogCard({imgUrl}) {
  return (
    <div>
        <img src={imgUrl} />
    </div>
  )
}

export default BlogCard