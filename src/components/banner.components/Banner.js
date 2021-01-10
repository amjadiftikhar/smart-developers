import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import bannerImage from "../../images/banner.png";
import webDev from "../../images/webDev.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import "./banner.styles.css";

function Banner() {
    let history = useHistory();

    function handleClick() {
        history.push("/contact");
    }
    
    useEffect(() => {
        Aos.init({duration: 3000});
    }, [])
    return (
        <div className="heroSection">
            <div className="bannerSection">
                <div className="motivation">
                    <h2 className="bannerDescription">
                        WE ARE A TEAM OF PROFESSIONALS WHO BUILDS GREAT SOFTWARE
                    </h2>
                </div>
                <img className="bannerImage" src={bannerImage} alt=""/>
            </div>
            <div className="mainSection" data-aos="fade-up">
                <div className="imageContainer">
                    <img src={webDev} alt=""/>
                    <div className="content">
                        <h2>We Develop</h2>
                        <p className="weFocus">We focus on quality & 
                            Cost-Effective solution
                        </p>
                    </div>
                </div>
                <div className="getQuoteSection" data-aos="fade-left">
                    <h2>WEB DEVELOPMENT</h2>
                    <p className="devTeam">Find a development team to 
                        get the best development solutions
                    </p>
                    <a href='#' onClick={handleClick}>Contact us</a>
                </div>
            </div>
        </div>
    )
}

export default Banner;
