import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from './logo.png';
import './index.css';

const _DURATION = 1500;

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
                duration={_DURATION}
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
                duration={_DURATION}
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
                duration={_DURATION}
              >
                אימונים
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                offset={-70}
                duration={_DURATION}
              >
                גלריה
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={_DURATION}
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