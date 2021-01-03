import React from 'react';
import {FaFacebookF} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import "./footer.styles.css"

function Footer() {    
    return (
        <div className="footer">
            <div className="footerSection">
                <div className="footerAboutUs">
                    <h3 className="footerHeader">About</h3>
                    <a className="footerLinks" href="/portfolio">
                        Portfolio
                    </a>
                    <a className="footerLinks" href="/about">Team</a>
                    <a className="footerLinks" href="/contact">Contact</a>
                </div> 
                <div className="footerServices">
                    <h3 className="footerHeader">Services</h3>
                    <div>Software Development</div>
                    <div>Custom Software</div>
                    <div>Full Stack Development</div>
                    <div>Mobile App Development</div>
                    <div>CMS</div>
                    <div>E-commerce</div>
                    <div>Maintenance & Support</div>
                    <div>IT Support</div>
                </div>
                <div className="socialMeadia">
                    <h3 className="footerHeader">Social Media</h3> 
                    <div className="socialMeadiaLinks">              
                        <a className="footerLinks" href="#">
                            <FaFacebookF className="socialMediaIcon"/>                            
                        </a>
                        <a className="footerLinks" href="#">
                            <FaLinkedinIn className="socialMediaIcon"/>
                        </a>
                        <a className="footerLinks" href="#">
                            <FaTwitter className="socialMediaIcon"/>
                        </a>
                        <a className="footerLinks" href="#">
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
