import React from 'react';
import Banner from "../banner.components/Banner";
import Services from "../services.components/Services";
import Tools from "../technologies.components/Tools";
import Projects from "../projects.components/Projects";
import "./home.styles.css";
import ScrollToTop from '../scroll.components/ScrollToTop';
import ScrollToDown from '../scroll.components/ScrollToDown';
import Popup from '../popup.components/PopUp';

const Home  = () => {
    return (
        <div className="mainContainer" data-testid='homeId'>
            <Banner/>
            <Services/> 
            <Popup/>
            <ScrollToDown/>
            <ScrollToTop/>
            <Projects/>
            <Tools/>
        </div>
    )
}

export default Home;
