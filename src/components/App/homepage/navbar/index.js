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
import Login from './login';

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
      
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Booksplorer</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <NavbarBrand href="/">About us</NavbarBrand>
          <NavbarBrand href="/">Contact us</NavbarBrand>
            <Nav className="ml-auto">
              <NavItem>
              <NavLink href="/sellbook">Sell A Book</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        
      </div>
    
    );
  }
}