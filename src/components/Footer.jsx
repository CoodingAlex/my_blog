import React from 'react'
import '../assets/styles/Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className="Footer ">
      <div className="Footer-container container-fluid shadow-lg">
        <p className="Footer-love">
          Made with love
        </p>
        <Link className="text-decoration-none text-reset">
          <p className="Footer-about">
            About the creator
          </p>
        </Link>
      </div>
    </footer>
  )
}

export default Footer;