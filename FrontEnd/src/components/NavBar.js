
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {

  
  return (
    <div>
       <header className="header">
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" id="head_">
        <div className="container-fluid">
            <img src="img/logo_b.png" alt="shop_logo" id="logo"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navbar_">
              <li className="nav-item">
                <Link className="nav-Link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" to="/Shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link " aria-current="page" to="/About_us">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" aria-current="page" to="/Contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" aria-current="page" to="/Cart"><i className="fa-solid fa-cart-shopping"></i></Link>
              </li>
            </ul>
  
          </div>
        </div>
      </nav>
    </header>

    
    </div>
  )
}
