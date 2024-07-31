import React from 'react'
import download from "../assets/downloadImg.jpg"
const Logo = ({width="100px"}) => {
  return (
    <div><img src={download} style={{width}}/></div>
  )
}

export default Logo