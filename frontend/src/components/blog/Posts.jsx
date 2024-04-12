import React from 'react'
import Post from "./Post"
import SearchInput from "./SearchInput"

const Posts = () => {
  return (
    <div className="flex flex-col w-1/2 items-center justify-center">
      <SearchInput/>
      <Post/>
    </div>
  )
}

export default Posts
