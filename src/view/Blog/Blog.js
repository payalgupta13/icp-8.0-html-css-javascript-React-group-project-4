import React from 'react'
import { BlogHeading,TagLine,Blogs } from '../../config/BlogData';
import "./Blog.css";
import BlogCard from '../../components/BlogCards/BlogCard';

function Blog() {
  return (
    <div>
        <div className='blog-page'>
             <div className='blog-container'>
                 <h1>{BlogHeading}</h1>
                 <p>{TagLine}</p>
             </div>
             <div className='btn-container'>
                <button>Add Your Blogs</button>
             </div>
             <div className='component-cards'>
             {Blogs.map((BlogCards)=>{
              return <BlogCard
              imgUrl={BlogCards.imgUrl}

              />
              })}
             </div>
        </div>
    </div>
  )
}

export default Blog