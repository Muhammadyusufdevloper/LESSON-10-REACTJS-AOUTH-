import React from 'react'
import error from "../../assets/images/noteFound/404.avif"
import "./NoteFound.scss"

const NotFound = () => {
  return (
    <>
        <img className='error' src={error} alt="" />
    </>
  )
}

export default NotFound