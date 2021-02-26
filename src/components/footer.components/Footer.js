import React from 'react';
import { useHistory } from "react-router-dom";
import {FaFacebookF} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import logo from "../../images/logo.png";
import "./footer.styles.css"

function Footer() { 
    let history = useHistory();  
    
    function handleClickPortfolio() {
        history.push("/portfolio");
    }

    function handleClickAbout() {
        history.push("/about");
    }

    function handleClickContact() {
        history.push("/contact");
    }
    return (
        <div className="footer" data-testid='footer'>
            <div className="footerSection">
                <div className="smartDeveloper">
                    <h3 className="footerHeader">Smart Developer</h3>
                    <a className="logoImage" href='#'>
                        <img src={logo} alt="logo pic"/>
                    </a>                   
                </div> 
                <div className="footerAboutUs">
                    <h3 className="footerHeader">About us</h3>
                    <a className="footerLinks" href='#'
                        onClick={handleClickPortfolio}>
                        Portfolio
                    </a>
                    <a className="footerLinks" href='#'
                        onClick={handleClickAbout}>
                        Team
                    </a>
                    <a className="footerLinks" href='#'
                        onClick={handleClickContact}>
                        Contact
                    </a>
                </div> 
                <div className="footerServices">
                    <h3 className="footerHeader">Services</h3>
                    <a href="##" className="footerServiceLinks">Software Development</a>
                    <a href="##" className="footerServiceLinks">Custom Software</a>
                    <a href="##" className="footerServiceLinks">Full Stack Development</a>
                    <a href="##" className="footerServiceLinks">Mobile App Development</a>
                    <a href="##" className="footerServiceLinks">CMS</a>
                    <a href="##" className="footerServiceLinks">E-commerce</a>
                    <a href="##" className="footerServiceLinks">Maintenance & Support</a>
                    <a href="##" className="footerServiceLinks">IT Support</a>
                </div>
                <div className="socialMeadia">
                    <h3 className="footerHeader">Follow</h3> 
                    <div className="socialMeadiaLinks">              
                        <a className="footerLinks" 
                            href="https://www.facebook.com/Smart-developer-105134804927431"
                            target="_blank">
                            <FaFacebookF className="socialMediaIcon"/>                            
                        </a>
                        <a className="footerLinks" 
                            href="https://www.linkedin.com/company/smart-developer-copenhagen/"
                            target="_blank">
                                <FaLinkedinIn className="socialMediaIcon"/>
                            </a>
                            <a className="footerLinks" href="#">
                            <FaTwitter className="socialMediaIcon"/>
                        </a>
                        <a className="footerLinks" href="#"
                        target="_blank">
                            <FaInstagramSquare className="socialMediaIcon"/>
                        </a> 
                    </div>              
                </div>
            </div>
            <div className="copyRightSection">
                <span>
                    copyright@2021 | All rights reserved
                </span>
                <span>Privacy Plocy</span>
            </div>
        </div>
    )
}

export default Footer
