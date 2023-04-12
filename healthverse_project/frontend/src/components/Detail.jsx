import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState([])
  const [imageArray, setImageArray] = useState([])

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/articles/${id}`)
      .then(res => {
        setPost(res.data)
        setImageArray(res.data.images)
      })
      .catch(err => console.log(err))
  }, [id])

  return (
    <div className='detail-post-container'>
      <div className='title-description'>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <div className='images-container'>
        {imageArray.map((img, index) => (
          <img src={img} alt="image" key={index}></img>
        ))}
      </div>
    </div>
  )
}

export default Detail
