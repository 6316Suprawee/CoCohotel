import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-header">
      <a href="/">
  <img style={{ width: 400, height: 70 }} src={require('./pages/image/CocoName.png')} alt="" />
</a>
        <button className="menu-button" onClick={toggleDropdown}>
          ☰
        </button>
      </div>
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
