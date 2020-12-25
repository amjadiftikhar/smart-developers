import React from 'react';
import {Container} from "react-bootstrap";
import "./about.styles.css";

const About = () => {
    return (
        <Container className="aboutContainer">
            <h1 className="about">About Page</h1>
            <p className="ojective">We aim to deliver exceptional customer service and user experiences. To do this, we developed a system that allows us to create custom-tailored apps and partnerships that fuel successful projects and processes.
            </p>
        </Container>
    )
}

export default About
