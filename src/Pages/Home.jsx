import React from 'react'
import { useEffect,useState } from 'react'
import appwriteServices from '../appwrite/config'
import { PostCard,Container } from '../components'
import { useSelector } from 'react-redux'
const Home = () => {
    const [posts,setposts]=useState([])
    const userStatus=useSelector((state)=>state.auth.status)
    const userData=useSelector((state)=>state.auth.userData)
    useEffect(()=>{
        appwriteServices.getPosts().then((posts)=>{
            if(posts){
                setposts(posts.documents)
            }
        })
    },[])
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            {
                            (userStatus)?
                            (<h1 className="text-2xl font-bold hover:text-gray-500">
                                There is No Post Posted Yet!!!
                            </h1>):
                           ( <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>)
                             } 
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
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

export default Home