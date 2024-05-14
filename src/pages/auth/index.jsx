import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
  let isLogin = localStorage.getItem("x-auth-tokin")

  return isLogin ? <Outlet/> : <Navigate to={"/login"}/>
}

export default Auth