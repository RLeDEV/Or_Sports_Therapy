import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from './logo.png';
import './index.css';

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-icons">
            <li className="nav-icon">
                <a href="https://www.facebook.com/or.eretzkdosha" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            </li>
            <li className="nav-icon">
                <a href="https://www.youtube.com/user/kdosha47" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            </li>
            <li className="nav-icon">
                <a href="https://www.instagram.com/or_sports_therapy/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </li>
          </ul>
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-60}
                duration={2500}
              >
                אודות
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="treatments"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2500}
              >
                טיפולים
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="trainings"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2500}
              >
                אימונים
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2500}
              >
                גלריה
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2500}
              >
                סירטונים
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2500}
              >
                צור קשר
              </Link>
            </li>
          </ul>
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
        </div>
      </nav>
    );
  }
}