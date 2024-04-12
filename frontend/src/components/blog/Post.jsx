import React from 'react'

const Post = (props) => {
  return (
    <div>
      <div>
        <img src={props.image} alt="blog image page"/>
      </div>
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Post
