import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ children }) => {
  return (
    <nav>
      <h1 className="title">KARTHIK SISTA</h1>
      <ul className="nav-bar">
        <li className="links">
          <Link to="/">Home</Link>
        </li>
        <li className="links">
          <Link to="/work">Work</Link>
        </li>
        <li>{children}</li>
      </ul>
    </nav>
  );
};

export default Nav;
