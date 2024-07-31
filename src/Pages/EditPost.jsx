import React, { useEffect, useState } from 'react'
import { PostForm,Container } from '../components'
import appwriteServices from '../appwrite/config'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
const EditPost = () => {
  const [posts,setposts]=useState(null)
  const {slug}=useParams()
  const navigate=useNavigate()
  useEffect(()=>{
    if(slug){
      appwriteServices.getPost(slug).then((post)=>{
        if(post){
          setposts(post)
        }
      })
    }
    else{
      navigate("/")
    }
  },[slug,navigate])
  return posts?(
    <div className='py-7'>
      <Container>
        <PostForm post={posts}/>
      </Container>
    </div>
  ):null
}

export default EditPost