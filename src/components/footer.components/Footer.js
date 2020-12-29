import React from 'react';
import "./footer.styles.css"

function Footer() {
    return (
        <div className="footer">
            <div className="footerSection">
                <div className="footerAboutUs">
                    <h3 className="footerHeader">About</h3>
                    <a className="footerLinks" href="#">Portfolio</a>
                    <a className="footerLinks" href="/about">Team</a>
                    <a className="footerLinks" href="/contact">Contact</a>
                </div> 
                <div className="socialMeadia">
                    <h3 className="footerHeader">Social Media</h3>               
                    <a className="footerLinks" href="#">Facebook</a>
                    <a className="footerLinks" href="#">Linkedin</a>
                    <a className="footerLinks" href="#">Twitter</a>
                    <a className="footerLinks" href="#">Instagram</a>                
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
            </div>
            <div className="copyRightSection">
                <span>
                    copyright@2020 | All rights reserved
                </span>
                <span>Privacy Plocy</span>
            </div>
        </div>
    )
}

export default Footer
