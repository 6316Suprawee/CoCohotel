import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when screen size is greater than 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="nav">
      <div className="nav-header">
        <a href="/">
          <img src={require('./pages/image/Coco.png')} alt="" />
        </a>
      </div>
      <button className="menu-button" onClick={toggleDropdown}>
          ☰
        </button>
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li><a href="/Room">Room</a></li>
        <li><a href="/About">About us</a></li>
        <li><a href="/Booking">Booking</a></li>
        <li className="btn-container">
          <a href="/Login" className="btn">Login</a>
          <a>/</a>
          <a href="/MemberRegister" className="btn">Register</a>
        </li>
      </ul>
    </nav>
  );
}
