import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Link } from 'react-router-dom'
function Profile() {
  return (
    <>
    <Navbar/>
    <Link to="/" className='text-white bg-jade-500 px-2 p-1 rounded' onClick={()=>{
      localStorage.removeItem("userData");
    }}>Logout</Link> </>
  )
}

export default Profile
