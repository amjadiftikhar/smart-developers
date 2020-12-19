import React from 'react';
import bannerImage from "../../images/banner.png";
import webDev from "../../images/webDev.jpg";
import "./banner.styles.css";

function Banner() {
    return (
        <>
        <div className="bannerSection">
            <img src={bannerImage} alt=""/>
        </div>
        <div className="mainSection">
            <div className="weDevelop">
                <div className="imageContainer">
                    <img src={webDev} alt=""/>
                    <div className="content">
                        <h2>We Develop</h2>
                        <p className="weFocus">We focus on quality & Cost-Effective solution</p>
                    </div>
                </div>
                <div className="getQuoteBtn">
                    <h1>WEB DEVELOPMENT</h1>
                    {/* <p className="weFocus">We focus on quality & Cost-Effective solution</p> */}
                    <p className="devTeam">Find a development team to get the best 
                        development solutions
                    </p>
                    <button>Get a Quote</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner;
