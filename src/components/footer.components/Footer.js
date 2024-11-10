import React from 'react';
import { useHistory } from "react-router-dom";
import {FaFacebookF} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
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
                    <span className="logoImage" >
                        <img src={logo} alt="logo pic"/>
                    </span>                   
                </div> 
                <div className="footerAboutUs">
                    <h3 className="footerHeader">About us</h3>
                    <span className="footerLinks" 
                        onClick={handleClickPortfolio}>
                        Portfolio
                    </span>
                    <span className="footerLinks" 
                        onClick={handleClickAbout}>
                        Team
                    </span>
                    <span className="footerLinks" 
                        onClick={handleClickContact}>
                        Contact
                    </span>
                </div> 
                <div className="footerServices">
                    <h3 className="footerHeader">Services</h3>
                    <span className="footerServiceLinks">Software Development</span>
                    <span className="footerServiceLinks">Custom Software</span>
                    <span className="footerServiceLinks">Full Stack Development</span>
                    <span className="footerServiceLinks">Mobile App Development</span>
                    <span className="footerServiceLinks">CMS</span>
                    <span className="footerServiceLinks">E-commerce</span>
                    <span className="footerServiceLinks">Maintenance & Support</span>
                    <span className="footerServiceLinks">IT Support</span>
                </div>
                <div className="socialMeadia">
                    <h3 className="footerHeader">Follow</h3> 
                    <div className="socialMeadiaLinks">              
                        <a className="footerLinks" 
                            href="https://www.facebook.com/Smart-developer-105134804927431"
                            target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="socialMediaIcon"/>                            
                        </a>
                        <a className="footerLinks" 
                            href="https://www.linkedin.com/company/smart-developer-copenhagen/"
                            target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="socialMediaIcon"/>
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
