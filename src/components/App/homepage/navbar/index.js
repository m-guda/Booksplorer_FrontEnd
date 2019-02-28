// import React from 'react';
// import './app.css';

// import { Link } from 'react-router-dom';
// class NavBar extends React.Component {
//   render() {
//     return (
//       <header>
//         <ul className="header">
//           <li><a href="#" style={{fontSize : "30px"}}>Booksplorer</a></li>
         
//           <li><a href="#">Contact us</a></li>
//           <li><a href="#">Login/Signup</a></li>
//         </ul>
//         <br/>
//         <br/>
//         <br/>
//       </header>
//     )
//   }
// }
// export default NavBar;

import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  import{
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
}from 'react-router-dom'


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      
      <div class="container">
      <div class="row">
          <Navbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
          <div class="col">
          <NavbarBrand href="/" style={{fontSize : "30px"}}>Booksplorer</NavbarBrand>
          </div>
          <div class="col-7">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <NavbarBrand href="/">How it Works?</NavbarBrand>
          <NavbarBrand href="/">Who's it for?</NavbarBrand>
          <NavbarBrand href="/">Reach Out!</NavbarBrand>
          <Nav className="ml-auto">
          <NavItem>
          <NavLink href="/login">Login</NavLink>
          </NavItem>
          </Nav>    
          </Collapse>
          </div>
          </Navbar>
          
        </div>
    </div>
    );
  }
}

