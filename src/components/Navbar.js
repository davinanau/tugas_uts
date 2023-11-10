import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../assets/images/photo/icon.png';

import '../style/Navbar.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src={Icon} alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
