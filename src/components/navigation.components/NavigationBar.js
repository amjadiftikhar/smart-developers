import React from 'react';
import {Nav, Navbar, NavLink} from "react-bootstrap";
import logo from "../../images/logo.png";
import { withRouter } from "react-router";
import {LinkContainer} from 'react-router-bootstrap';
import "./navigation.styles.css";

const Header = (props) => {
  const {location} = props;
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/">
        <div className="logoImageContainer">
          <div className="logo">
            <img className="companyLogo" src={logo} alt="logo"/>
          </div>
           <div className="companyName">Smart Developer</div>
        </div>       
      </Navbar.Brand>
      <Navbar.Toggle className="toggle bg-light" 
        aria-controls="navbar-toggle"/>
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto" activeKey={location.pathname}>
          <LinkContainer exact to="/"><NavLink>Home</NavLink></LinkContainer>
          <LinkContainer to="/about"><NavLink>About</NavLink></LinkContainer>
          <LinkContainer to="/services"><NavLink>Services</NavLink></LinkContainer>
          <LinkContainer to="/portfolio"><NavLink>Portfolio</NavLink></LinkContainer>
          <LinkContainer to="/portfolio-catalog"><NavLink>Catalog</NavLink></LinkContainer>
          <LinkContainer to="/contact"><NavLink>Contact</NavLink></LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const NavigationBar = withRouter(Header);

export default NavigationBar;




