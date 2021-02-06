import React from 'react';
import {Container} from "react-bootstrap";
import "./about.styles.css";
import Profiles from './Profiles';

const About = () => {
    return (
        <Container className="aboutContainer">
            <p className="objective">
             <span style={{fontSize:'16px', fontWeight: 550}}>SMART DEVELOPER</span> is a startup 
                based in Copenhagen. An extended team of professionals with expertise in Software 
                and Web-development. We transform ideas into concrete products by implementing smart 
                solutions to problems. Smart Developer is a development hub, we develop custom 
                software, websites and mobile apps for businesses and individuals. Our products are 
                simple, user-friendly and at a very competitive price.<br/>
                We aim to deliver exceptional customer service and user experiences. To do this, 
                we developed a system that allows us to create custom-tailored apps and partnerships 
                that fuel successful projects and processes. We also provide the best solutions to 
                existing quality and usability problems by putting theory to practice. Read more about 
                our methodology to ensure quality, evaluate usability and how can we help you improve 
                your product’s user experience.
            </p>
            <Profiles/>
        </Container>
    )
}

export default About
