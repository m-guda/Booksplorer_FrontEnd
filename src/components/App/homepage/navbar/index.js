import React from 'react';
import './app.css';

import { Link } from 'react-router-dom';
class NavBar extends React.Component {
  render() {
    return (
      <header>
        <ul className="header">
          <li><a href="#">Booksplorer</a></li>
         
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Login/Signup</a></li>
        </ul>
      </header>
    )
  }
}
export default NavBar;
