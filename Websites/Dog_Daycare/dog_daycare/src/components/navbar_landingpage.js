import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';

class NavigationBar extends Component {

  render() {

    return (
      <div>
        <Navbar className="navbar" inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a id="brand" href="#brand">Bones & Whiskers</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <Button id="contact-btn" className = "btn" eventkey={"Clicked on me"} href="#">
                Contact Us
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
