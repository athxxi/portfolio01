import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/archive" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Archive
            </NavLink>
          </li>
          <li className="nav-item">
            <a
              href="https://drive.google.com/file/d/1UGuMtCCq7IgsfgbOKBzKWsgzMbFCri9b/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;