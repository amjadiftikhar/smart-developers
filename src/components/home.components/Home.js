import React from 'react';
import Banner from "../banner.components/Banner";
import Services from "../services.components/Services";
import Tools from "../technologies.components/Tools";
import Projects from "../projects.components/Projects";
import "./home.styles.css";
import ScrollToTop from '../scroll.components/ScrollToTop';
import ScrollToDown from '../scroll.components/ScrollToDown';

const Home  = () => {
    return (
        <div className="mainContainer">
            <Banner/>
            <Services/> 
            <ScrollToDown/>
            <ScrollToTop/>
            <Tools/>
            <Projects/>
        </div>
    )
}

export default Home;
