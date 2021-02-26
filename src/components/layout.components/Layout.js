import React from 'react';
import Container from "react-bootstrap/Container";
import "./layout.styles.css";

const Layout = (props) => {
    return (
        <Container style={{minHeight:"80vh"}} fluid={true} data-testid='layout'>
            {props.children}
        </Container> 
    )
}

export default Layout;
