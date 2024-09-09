import React from "react";
import { BlogHeading, TagLine, Blogs } from "../../config/BlogData";
import "./Blog.css";
import BlogCard from "../../components/BlogCards/BlogCard";

function Blog() {
  return (
    <div>
      <div className="blog-page">
        <div className="blog-container">
          <h1>{BlogHeading}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            eum esse eius beatae nam placeat.<br></br>Impedit incidunt molestiae
            cupiditate labore veritatis beatae nulla dicta, perferendis eaque
            saepe debitis, recusandae exercitationem!
          </p>
        </div>
        <div className="btn-container">
          <button>Add Your Blogs</button>
        </div>
        <div className="component-cards">
          {Blogs.map((BlogCards) => {
            return (
              <BlogCard
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
  );
}

export default Blog;
