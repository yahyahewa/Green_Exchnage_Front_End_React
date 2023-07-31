import React from 'react'
import { Navigate, Outlet } from 'react-router'

function Protect() {
  if(JSON.parse(localStorage.getItem("userData")))return <Outlet/>;
  return <Navigate to="/403" replace/> 
}

export default Protect
