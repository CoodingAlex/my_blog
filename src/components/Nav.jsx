import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Nav.css'
function Nav() {
  return (
    <div className="Header">
      <div className="Header-container container-fluid shadow">
        <div className="Header-content row">
          <h3 className="Header-title">Jr Developers Blog</h3>
        </div>
        <div className="header-sections row ">
          <div className="p-0 col-lg-1 col-sm-2"><Link to="/" className="text-reset ">Inicio</Link></div>
          <div className="p-0 col-lg-1 col-sm-2 mr-3"><Link to="/posts" className="text-reset ">Posts</Link></div>
          <div className="p-0 col-lg-1 col-sm-2 mr-3 "><Link to="/" className="text-reset ">Lenguajes</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Nav;