import React, { useEffect, useState } from 'react'
import { Container,PostCard } from '../components'
import appwriteServices from '../appwrite/config'
const AllPosts = () => {
    const [posts,setposts]=useState([])
    useEffect(()=>{
      appwriteServices.getUserPosts().then((posts)=>{
          if(posts){
              setposts(posts.documents)
          }
      })
  },[])
    
  return (
    <div className='w-full py-8'>
        <Container>
        <div className='flex font-bold justify-center'>
        <h1>  All Your post !!</h1>
        </div>
            <div className='flex flex-wrap border-4 border-blue-500'>
            
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts