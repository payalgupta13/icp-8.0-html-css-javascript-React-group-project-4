import React from 'react'
import "./Blog.css";

function Blog() {
  return (
    <div>
        <div className='blog-page'>
             <div className='blog-container'>
                 <h1>Latest Blogs</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, eum esse eius beatae nam placeat.<br></br>Impedit incidunt molestiae cupiditate labore veritatis beatae nulla dicta, perferendis eaque saepe debitis, recusandae exercitationem!</p>
             </div>
             <div className='btn-container'>
                <button>Add Your Blogs</button>
             </div>
        </div>
    </div>
  )
}

export default Blog