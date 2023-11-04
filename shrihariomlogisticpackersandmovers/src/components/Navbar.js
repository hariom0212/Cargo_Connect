import React from 'react'
import "../css/navbar.css";
import About from './About.js'

export default function Navbar() {
  return (
    <div>
     <nav className="navbar">
            <ul>
                <li><a href="./about">ABOUT</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="./contactus">CONTACT US</a></li>
                <li><a href="./client">CLIENTS</a></li>
            </ul>
        </nav>
    </div>
  )
}
