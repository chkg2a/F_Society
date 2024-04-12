import React from 'react'
import Post from "./Post"
import SearchInput from "./SearchInput"

const Posts = () => {
  return (
    <div className="flex flex-col w-screen items-center justify-center">
      <SearchInput/>
      <Post title="Lorem Ipsum" description="Diam sem nunc tortor, arcu duis eleifend iaculis lectus ex lectus magna faucibus praesent, dolor tempus ullamcorper etiam duis neque proin consectetur et tortor ut ac metus parturient. Cras rutrum nullam in phasellus in et orci vulputate etiam donec est." image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F9b%2FPhoto_of_a_kitten.jpg&f=1&nofb=1&ipt=9959878c237bf8af95810d02c57e8528542bb46303e9f4e9667e2432581e1f9c&ipo=images"/>
    </div>
  )
}

export default Posts
