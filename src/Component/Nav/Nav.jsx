import React from 'react'
import './Nav.css'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav>
      <h1>PORTFOLIO</h1>

      {/* Hidden Checkbox for CSS Toggle */}
      <input type="checkbox" id="menu-toggle" className="menu-toggle-input" />

      {/* Desktop Menu */}
      <ul className="desktopmenu">
        <li>
          <Link to="home" smooth={true} duration={500} offset={-70} spy={false}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-70} spy={false}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-70} spy={false}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-70} spy={false}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon as Label for Checkbox */}
      <label htmlFor="menu-toggle" className="hamburger">
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </label>

      {/* Mobile Menu */}
      <ul className="mobilemenu">
        <li>
          <Link to="home" smooth={true} duration={500} offset={-70} spy={false}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-70} spy={false}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-70} spy={false}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-70} spy={false}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav