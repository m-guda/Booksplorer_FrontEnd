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

 

export default class NavBarlogin extends React.Component  {
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
              <NavLink href="/sellbook">SellBook</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">viewProfile</NavLink>
            </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        
      </div>
    
    );
  }
}
