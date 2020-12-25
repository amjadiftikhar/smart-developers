import React from 'react';
import {Nav, Navbar, NavLink} from "react-bootstrap";
import logo from "../../images/logo.png";
import { withRouter } from "react-router";
import {LinkContainer} from 'react-router-bootstrap';
import "./navigation.styles.css";

const Header = (props) => {
  const {location} = props;
  return (
      <Navbar expand="lg">
          <Navbar.Brand href="/">
            <img className="companyLogo" src={logo} alt=""/>
          </Navbar.Brand>
          <Navbar.Toggle className="toggle bg-light" 
            aria-controls="navbar-toggle"/>
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto" activeKey={location.pathname}>
              <LinkContainer exact to="/">
                <NavLink activeClassName='active'>Home</NavLink>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavLink activeClassName='active'>About</NavLink>
              </LinkContainer>
              <LinkContainer to="/services">
                <NavLink activeClassName='active'>Services</NavLink>
              </LinkContainer>
              <LinkContainer to="/portfolio">
                <NavLink activeClassName='active'>Portfolio</NavLink>
              </LinkContainer>
              <LinkContainer to="/contact">
                <NavLink activeClassName='active'>Contact</NavLink>
              </LinkContainer>
              <LinkContainer to="/getQuote">
                <NavLink activeClassName='active'>Get a quote</NavLink>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
    </Navbar>
  )
}

const NavigationBar = withRouter(Header);

export default NavigationBar;
