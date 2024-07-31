import { useDispatch } from "react-redux"
import { authService } from "../../appwrite/auth"
import { logout } from "../../Stores/authSlice"
import {useNavigate } from "react-router-dom"
const Logout = () => {
    const navigate=useNavigate()
    const distpatch=useDispatch()
    const logoutHandler=async()=>{
         await authService.logOut()
        .then(()=>distpatch(logout()))
        navigate("/login")
    }
  return <button className="inline-block px-6 py-2 duration-200
  hover:bg-blue-100 rounded-full"
  onClick={logoutHandler}>
    Logout
  </button>
} 

export default Logout