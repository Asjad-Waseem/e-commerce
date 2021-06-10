import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

import './AppNavbar.css';

import AppLogo from '../../../assets/app-logo.svg';

function AppNavbar() {

    return (

        <Navbar className = "app__navbar" expand="md">
          <Navbar.Brand as = {Link} to = "/"><img className = "app__logo" src = {AppLogo} alt = "app-logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className = "nav__link">Vendor Name</Nav.Link>
              <Nav.Link as = {Link} to = "/">
                  <Button className = "text-light" style = {{fontSize: "16px", fontWeight: "500", letterSpacing: "0.023rem", backgroundColor: "#0066cc", color: "#334ac0", borderRadius: "5px", border: "1px solid #eee", paddingTop: "5px"}}>Logout</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

    );
}

export default AppNavbar;
