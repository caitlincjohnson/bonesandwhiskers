import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Bones & Whiskers</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Home
              </NavItem>
              <NavItem eventKey={2} href="#">
                Services
              </NavItem>
              <NavItem eventKey={3} href="#">
                Pricing
              </NavItem>
              <NavItem eventKey={4} href="#">
                About The Team
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Contact Us
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
