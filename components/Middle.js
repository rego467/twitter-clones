import React from 'react'

import ItemMidle from './ItemMidle'
import ItemInputMiddle from './ItemInputMiddle'
import PostMiddle from './PostMiddle'

export default function Middle() {
  const posts = [
    {
      id: 1,
      name:"Rego edwar",
      username:"@regoedwar",
      userImg:"gunung.jpg",
      img:"https://images.unsplash.com/photo-1682459155693-5c4427c6abb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
      text:"woowww!!",
      timesTamp:"2 ago"
    },
    {
      id: 2,
      name:"rego edwar",
      username:"@regoedwar",
      userImg:"gunung.jpg",
      img:"https://images.unsplash.com/photo-1682459155693-5c4427c6abb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
      text:"woowww!!",
      timesTamp:"2 ago"
    }
  ]
  return (
    <div className='sm:border-l sm:border-r sm:border-b sm:border-gray-300 min-h-screen cursor-pointer sticky top-0'>
       <ItemMidle /> 
       <ItemInputMiddle />
       {
        posts.map((post)=>{
          return(
            <div key={post.id}>
              <PostMiddle name={post.name} username={post.username} userImg={post.userImg} text={post.text} timesTamp={post.timesTamp} imgs={post.img}/>      
            </div>
          )
        })
       }
    </div>
  )
}
