import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'





function Post({ post }) {
  return (
    // <Link to={`${post.id}`} className='post-link'>

    <div className='blog'>
      <img src={post.img} alt='' className='blog-image' />
      <div className='blog-title'>
        <h2>{post.title}</h2>
        <div className='blog-body' dangerouslySetInnerHTML={{ __html: post.body }} />        </div>
    </div>
    // </Link>

  )
}

export default Post
