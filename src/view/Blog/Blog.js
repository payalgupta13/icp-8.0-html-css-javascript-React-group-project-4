import React, { useState } from "react";
import { BlogHeading, TagLine, TagLine_2, Blogs } from "../../config/BlogData";
import "./Blog.css";
import BlogCard from "../../components/BlogCards/BlogCard";

function Blog() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      <div className="blog-page">
        <div className="blog-container">
          <h1>{BlogHeading}</h1>
          <p className="para">{TagLine}</p>
          <p className="para">{TagLine_2}</p>
        </div>

        <div className="btn-container">
          <button onClick={() => setIsPopupOpen(true)}>Add Blog</button>

          {isPopupOpen && (
            <div className="popup-overlay">
              <div className="popup-content">
                <h2>Add a New Blog</h2>
                <input type="text" />
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setIsPopupOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
         
        <div className="main-component-cards">
        <div className="component-cards">
          
          {Blogs.map((BlogCards) => {
            return (
              <BlogCard
                key={BlogCards.id}
                id={BlogCards.id}
                imgUrl={BlogCards.imgUrl}
                title={BlogCards.title}
                description={BlogCards.description}
                details={BlogCards.details}
              />
            );
          })}
        </div>
        </div> 

      </div>
    </div>
  );
}

export default Blog;
