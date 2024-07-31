import React from 'react'
import { Container,Logout} from "../index"
import Logo from '../Logo'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const authStatus=useSelector((state)=>state.auth.status)
  const authData=useSelector((state)=>state.auth.userData)
  const navigate=useNavigate()
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to="/">
            <Logo width='70PX'/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item)=>
            item.active ?(<li key={item.name}>
              <button
              className='inline-block px-6 py-2 duration-200
                          hover:bg-blue-100 rounded-full'
              onClick={()=>navigate(item.slug)}>{item.name}</button>
            </li>):null
            )}
            {authStatus && (<li><Logout/></li>)}
          </ul>
          {
            authStatus && (<div className='flex border-2 border-Dark-500 rounded-lg p-1 m-1'><FaRegUserCircle className='mt-3 pr-1' /> <p className='mt-2 font-bold'>{authData.name}</p></div>)
          }
        </nav>
      </Container>
    </header>
  )
}

export default Header