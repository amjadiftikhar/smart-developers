import React, {useEffect} from 'react';
import softwareDevelopment from "../../images/softwareDevelopment.jpg";
import mobileDevelopment from "../../images/mobileDevelopment.png";
import itSupport from "../../images/itSupport.jpg";
import dedicatedTeam from "../../images/dedicatedTeam.png";

import Aos from "aos";
import "aos/dist/aos.css";

import "./service.styles.css";

function Services() {  
    
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []); 

    return (
        <div className="serviceContainer" data-testid='services'>
            <div className="serviceHeaderSection">
                <div className="servicesTitle">
                        <h2 className="caseStudyDescription">OUR SERVICES</h2>
                </div>
                <div className="softwareServiceImage">
                        {/* <img src={softwareServices} alt=""/> */}
                </div>
            </div>
            <div className="serviceSection">  
                <div className="serviceCardContainer">
                    {/* data-aos, applying animation on the section */}
                    <div className="serviceCard" data-aos="fade-right">
                        <h2 className="cardTitle">Software Development</h2>
                        <img className="serviceImage" src={softwareDevelopment} alt=""/>
                    </div>
                    <div className="serviceDescription">
                        {/* data-aos, applying animation on the section */}
                        <p className="cardDescription" data-aos="fade-up">
                            We are specialized in software development across a 
                            full range of trendy technologies from frontend to backend. 
                            We are focused on ever 
                            best user experience and our developers have an 
                            extensive understanding and experience.
                        </p>                    
                    </div>
                </div> 
                <div className="serviceCardContainer"> 
                    {/* data-aos, applying animation on the section */}
                    <div className="serviceCard" data-aos="fade-left">
                        <h2 className="cardTitle">Mobile App Development</h2>
                        <img className="serviceImage" src={mobileDevelopment} alt=""/>
                    </div>                  
                    <div className="serviceDescription">
                        {/* data-aos, applying animation on the section */}
                        <p className="cardDescription" data-aos="fade-up">
                            Mobile apps are considered to be one of the most powerful 
                            tools for contacting the target audience in terms of business. 
                            We build windows, ios 
                            and android apps. With best UI/UX design we ensure to 
                            extend the reach of your business to mobile users.                      
                        </p>
                    </div>
                </div>
                <div className="serviceCardContainer">
                    {/* data-aos, applying animation on the section */}
                    <div className="serviceCard" data-aos="fade-right">
                        <h2 className="cardTitle">IT Support</h2>
                        <img className="serviceImage" src={itSupport} alt=""/>
                    </div>
                    <div className="serviceDescription">
                        <p className="cardDescription" data-aos="fade-up">
                            Our experts provide on-site and remote technical support 
                            to your business and personal user support. We support removing a 
                            virus infection, figuring 
                            out why your computer is running slow, having software 
                            configured and setting up a new machine.
                        </p>
                    </div>
                </div>
                <div className="serviceCardContainer">
                    {/* data-aos, applying animation on the section */}
                    <div className="serviceCard" data-aos="fade-left">
                        <h2 className="cardTitle">Dedicated Team/Developer</h2>
                        <img className="serviceImage" src={dedicatedTeam} alt=""/>
                    </div>                   
                    <div className="serviceDescription">
                        {/* data-aos, applying animation on the section */}
                        <p className="cardDescription" data-aos="fade-up">
                            Customers come first and if you think you need a dedicated 
                            developer or a dedicated team to work on your project for a time frame, 
                            then you are 
                            at the right place. We make it possible for you to choose 
                            a colleague for you who will help you through the technical 
                            journey.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="servicesDetailContainer">
                <div className="customSoftwareDev">
                    <h4>Custom Software Development</h4>
                    <p className="customSoftwareDescription">
                        Let Smart Developer help you meet your unique business needs successfully. 
                        Process of custom software development comprises of designing, developing, 
                        deploying and maintaining software products and services. Software Developer 
                        will explicate your views by sketching a strategic approach to optimize and 
                        accomplish each domain of software development process. Our versatile team of 
                        skilled software developers provide a concrete foundation to develop efficient 
                        custom software applications with quality results that best suit your specific 
                        business demands.
                    </p>                    
                </div>
                <div className="hireTeamDetails">
                    <h4>Hire a dedicated team</h4>
                    <p className="hireTeamDescription">
                        Flourish and optimize your business by hiring a dedicated developer or team of 
                        dedicated software developers. Software Developer provides you with dedicated 
                        and skilled resources to achieve customized and high performing applications. 
                        Our professionals have significant insights which benefityour business with high 
                        performance and timely meeting project deadlines.
                    </p>                     
                </div>
            </div> */}
        </div>
    );
}

export default Services















