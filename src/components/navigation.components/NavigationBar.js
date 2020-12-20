import React from 'react';
import {Nav, Navbar, NavLink} from "react-bootstrap";
import logo from "../../images/logo.png";
// import { withRouter } from "react-router";
import "./navigation.styles.css";

const NavigationBar = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">
              <img className="companyLogo" src={logo} alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle className="toggle bg-light" 
              aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <NavLink href="/"> <li className="links">Home</li> </NavLink>
                <NavLink href="/about"> <li className="links">About</li></NavLink>
                <NavLink href="/services"> <li className="links">Services</li></NavLink>
                <NavLink href="/portfolio"> <li className="links">Portfolio</li></NavLink>
                <NavLink href="/contact"> <li className="links">Contact</li></NavLink>
                <NavLink href="/getQuote"> <li className="links">Get a quote</li></NavLink>
              </Nav>
            </Navbar.Collapse>
      </Navbar>
    )
}

export default NavigationBar;
