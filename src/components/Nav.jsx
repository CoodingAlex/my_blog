import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Nav.css'
function Nav() {
  return (
    <nav className="Header">
      <div className="Header-container container-fluid shadow">
        <div className="Header-sections row pt-4">
          <div className="p-0 col-lg-3 col-sm-1"><h3><Link to="/" className="text-reset text-decoration-none">Jr Developers</Link></h3></div>
          <div className="p-0 col-lg-1 col-sm-1 mr-3"><Link to="/posts" className="text-reset ">Posts</Link></div>
          <div className="p-0 col-lg-1 col-sm-1 mr-3 "><Link to="/" className="text-reset ">Lenguajes</Link></div>
          <div className="p-0 col-lg-1 col-sm-1 mr-3 "><Link to="/" className="text-reset "></Link></div>
          <div className="p-0 col-lg-1 col-sm-1 mr-3 "><Link to="/" className="text-reset ">Log in</Link></div>
          <div className="p-0 col-lg-1 col-sm-1 mr-3 "><Link to="/" className="text-reset ">Log out</Link></div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;