import React from 'react';
import "./footer.styles.css"

function Footer() {
    return (
        <div className="footerSection">
            <div className="footerForm">
                <h3 className="footerHeader">Contact Us</h3>
                <form action="" className="form">
                    <input type="text" placeholder="your name"/>
                    <input type="text" placeholder="your email" />
                    <input type="text" placeholder="phone number"/>
                    <textarea type="text" placeholder="text--!"/>
                    <button className="submitText">Send</button>
                </form>
            </div> 
            {/* <span className="circle"> */}
            <div className="socialMeadia">
                <h3 className="footerHeader">Social Media</h3>               
                <div>Facebook</div>
                <div>Linkedin</div>
                <div>Twitter</div>
                <div>Instagram</div>                
            </div>
            {/* </span> */}
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
    )
}

export default Footer
