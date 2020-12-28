import React from 'react';
import {Container} from "react-bootstrap";
import "./about.styles.css";
import Profiles from './Profiles';

const About = () => {
    return (
        <Container className="aboutContainer">
            <p className="objective">
            Smart Developers is a software development company with an aim to deliver exceptional customer service and user experiences. To do this, we developed a system that allows us to create custom-tailored apps and partnerships that fuel successful projects and processes.
            </p>
            <Profiles/>
        </Container>
    )
}

export default About
