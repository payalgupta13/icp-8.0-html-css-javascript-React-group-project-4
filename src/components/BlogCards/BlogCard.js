import React from "react";
import "./BlogCard.css";

function BlogCard({ imgUrl, title, description, details }) { 

    const currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',  
    month: 'long',     
    year: 'numeric'
    });

  return (
    <div className="blog-card-container">
      <img src={imgUrl} className="blog-card-image"/>
      <h3 className="blog-card-title">{title}</h3>
      <p className="blog-card-desc">{description}</p>
      <h5 className="blog-card-details">-{details}</h5>
      <h5 className="blog-card-details">{currentDate}</h5>
    </div>
  );
}

export default BlogCard;
