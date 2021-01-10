import React from 'react';
import emailjs from 'emailjs-com';
import {HiOutlineMail} from "react-icons/hi";
import {AiOutlineCheckSquare} from "react-icons/ai";
import ContactForm from "./ContactForm";
import "./contactPage.styles.css";

function Contact() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_yh0l2gh', 'template_5hqobku', 
        e.target, 'user_Ane2n8QteW2k8F4HWdDKu')
          .then((result) => {
            alert('Thank you for reaching out')
            console.log(result.text + 'funciona');
          }, (error) => {
            alert("Please try again!")
            console.log(error.text + 'no funciona');
          });
          e.target.reset();
        }

    return (
        <div className="contactContainer">
            <div className="detailSection">
                <h4 className="query">Get a Quote</h4>
                <p className="clientInfo">
                    Based on your business requirements and the information provided, we will be able to calculate cost and time frame, if you like to use our services 
                </p>
                <h4 className="query">Have any other questions?</h4>
                <p className="clientInfo"> 
                    {/* <HiOutlineMail/>  */}
                    We are always very glad to answer any questions, please feel free to fill up the form and send to us.  
                </p>
                <div className="offerSection">
                    <span><AiOutlineCheckSquare className="freeOffersBtn"/>
                        Free Quotation
                    </span>
                    <span><AiOutlineCheckSquare className="freeOffersBtn"/>
                        Free Consultation
                    </span>
                </div>
            </div>
            <div className="formSection">
                <ContactForm sendEmail={sendEmail}/>         
            </div>
        </div>
    )
}

export default Contact



























