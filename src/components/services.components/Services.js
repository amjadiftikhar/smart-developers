import React, {useEffect, useState} from 'react';
// import Service from "./ServiceCard";
// import servicesObj from "./services.obj";
import Aos from "aos";
import "aos/dist/aos.css";
import "./service.styles.css"

function Services() {    
    const [serviceDescription, toggleServiceDescription] = useState(false)
    const [psd, toggleServiceDescription1] = useState(false)

    const [hide, setHide] = useState(true)
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    function handleFnc(e, index){
        e.preventDefault();
        toggleServiceDescription1(id => !id);
        setHide (hide => !hide )    
    }

    return (
        <div className="serviceSection">
            <div className="cardContainer">
                <div className="serviceDescription">
                    <h2 className="cardTitle" data-aos="fade-down">Software Development</h2>
                    <p id="psd" className="cardDescription" data-aos="fade-up">
                        We are specialized in software development across a 
                        full range of trendy technologies 
                        {psd && <span id="1">from frontend to backend. We are focused on ever 
                            best user experience and our developers have an 
                            extensive understanding and experience.
                        </span>}
                        <a id="sd" data-aos="fade-right" className="showSearviceDescription" href="" 
                            onClick={handleFnc}>
                            {hide ? 'see more...' : 'hide >>'}                
                        </a>
                    </p>
                    
                </div>
                <div className="serviceCard" data-aos="fade-right">
                </div>
            </div>
            <div className="cardContainer">
                <div className="serviceCard" data-aos="fade-left">
                </div>
                <div className="serviceDescription">
                    <h2 className="cardTitle" data-aos="fade-down">Mobile App Development</h2>
                    <p className="cardDescription" data-aos="fade-up">
                        Mobile apps are considered to be one of the most powerful 
                        tools for contacting the target 
                        {serviceDescription && 
                        <span>audience in terms of business. We build windows, ios 
                            and android apps.With best UI/UX design we ensure to 
                            extend the reach of your business to mobile users.
                        </span>}
                        <a data-aos="fade-right" className="showSearviceDescription" href="" 
                            onClick={handleFnc}>
                            {hide ? 'more details...' : 'hide details >>'}                
                        </a>
                    </p>
                </div>
            </div>
            <div className="cardContainer">
                <div className="serviceDescription">
                    <h2 className="cardTitle" data-aos="fade-down">IT Support</h2>
                    <p className="cardDescription" data-aos="fade-up">
                        Our experts provide on-site and remote technical support 
                        to your business and personal user 
                        {serviceDescription && 
                        <span>support. We support removing a virus infection, figuring 
                            out why your computer is running slow, having software 
                            configured and setting up a new machine.
                        </span> }
                        <a data-aos="fade-right" className="showSearviceDescription" href="" 
                            onClick={handleFnc}>
                            {hide ? 'more details...' : 'hide details >>'}                
                        </a>
                    </p>
                </div>
                <div className="serviceCard" data-aos="fade-right">
                </div>
            </div>
            <div className="cardContainer">
                <div className="serviceCard" data-aos="fade-left">
                </div>
                <div className="serviceDescription">
                    <h2 className="cardTitle" data-aos="fade-down">Hire a dedicated team or developer</h2>
                    <p className="cardDescription" data-aos="fade-up">
                        Customers come first and if you think you need a dedicated 
                        developer or a dedicated team 
                        {serviceDescription && 
                        <span>to work on your project for a time frame, then you are 
                            at the right place. We make it possible for you to choose 
                            a colleague for you who will help you through the technical 
                            journey.
                        </span> }
                        <a data-aos="fade-right" className="showSearviceDescription" href="" 
                            onClick={handleFnc}>
                            {hide ? 'more details...' : 'hide details >>'}                
                        </a>
                    </p>
                </div>
            </div> 
        </div>
    );
}

export default Services
