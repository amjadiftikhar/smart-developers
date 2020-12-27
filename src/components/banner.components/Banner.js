import React, {useEffect} from 'react';
import bannerImage from "../../images/banner.png";
import webDev from "../../images/webDev.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import "./banner.styles.css";

function Banner() {
    useEffect(() => {
        Aos.init({duration: 5000});
    }, [])
    return (
        <div className="heroSection">
            <div className="bannerSection">
                <img src={bannerImage} alt=""/>
            </div>
            <div className="mainSection" data-aos="fade-down">
                <div className="imageContainer">
                    <img src={webDev} alt=""/>
                    <div className="content">
                        <h2>We Develop</h2>
                        <p className="weFocus">We focus on quality & 
                            Cost-Effective solution</p>
                    </div>
                </div>
                <div className="getQuoteSection" data-aos="fade-left">
                    <h2>WEB DEVELOPMENT</h2>
                    <p className="devTeam">Find a development team to 
                        get the best development solutions
                    </p>
                    <button>Get a Quote</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;
