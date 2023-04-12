import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from './Post'
import './styles.css'

function Posts() {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/articles/')
      .then(res => {
        setPosts(res.data)
        setFilteredPosts(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleSearch = event => {
    const filtered = posts.filter(post =>
      post.Title.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setFilteredPosts(filtered)
  }

  return (
    <div className='posts'>
      <div className='search-container'>
        <input
          type='text'
          placeholder='Search posts'
          onInput={handleSearch}
          className='search-input'
        />
      </div>

      <div className='posts-container'>
        {filteredPosts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}

export default Posts
