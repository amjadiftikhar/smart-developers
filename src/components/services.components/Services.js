import React, {useEffect} from 'react';
import softwareServices from "../../images/softwareServices.jpg";
import softwareDevelopment from "../../images/softwareDevelopment.jpg";
import mobileDevelopment from "../../images/mobileDevelopment.png";
import itSupport from "../../images/itSupport.jpg";
import dedicatedTeam from "../../images/dedicatedTeam.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "./service.styles.css"

function Services() {  
        useEffect(() => {
        Aos.init({duration: 2000});
    }, [])  
    return (
    <>
        <div className="servicesTitle">
                <p className="caseStudyDescription">OUR SERVICES</p>
        </div>
        <div className="softwareServiceImage">
                <img src={softwareServices} alt=""/>
        </div>
        <div className="serviceSection">  
            <div className="serviceCardContainer">
                <div className="serviceCard" data-aos="fade-right">
                    <h2 className="cardTitle">Software Development</h2>
                    <img className="serviceImage" src={softwareDevelopment} alt=""/>
                </div>
                <div className="serviceDescription">
                    <p className="cardDescription" data-aos="fade-up">
                        We are specialized in software development across a 
                        full range of trendy technologies from frontend to backend. We are focused on ever 
                        best user experience and our developers have an 
                        extensive understanding and experience.
                    </p>                    
                </div>
            </div> 
            <div className="serviceCardContainer"> 
                <div className="serviceCard" data-aos="fade-left">
                    <h2 className="cardTitle">Mobile App Development</h2>
                    <img className="serviceImage" src={mobileDevelopment} alt=""/>
                </div>                  
                <div className="serviceDescription">
                    <p className="cardDescription" data-aos="fade-up">
                        Mobile apps are considered to be one of the most powerful 
                        tools for contacting the target audience in terms of business. We build windows, ios 
                        and android apps.With best UI/UX design we ensure to 
                        extend the reach of your business to mobile users.                      
                    </p>
                </div>
            </div>
            <div className="serviceCardContainer">
                <div className="serviceCard" data-aos="fade-right">
                    <h2 className="cardTitle">IT Support</h2>
                    <img className="serviceImage" src={itSupport} alt=""/>
                </div>
                <div className="serviceDescription">
                    <p className="cardDescription" data-aos="fade-up">
                        Our experts provide on-site and remote technical support 
                        to your business and personal user support. We support removing a virus infection, figuring 
                        out why your computer is running slow, having software 
                        configured and setting up a new machine.
                    </p>
                </div>
            </div>
            <div className="serviceCardContainer">
                <div className="serviceCard" data-aos="fade-left">
                    <h2 className="cardTitle">Hire a dedicated team or developer</h2>
                    <img className="serviceImage" src={dedicatedTeam} alt=""/>
                </div>                   
                <div className="serviceDescription">
                    <p className="cardDescription" data-aos="fade-up">
                        Customers come first and if you think you need a dedicated 
                        developer or a dedicated team to work on your project for a time frame, then you are 
                        at the right place. We make it possible for you to choose 
                        a colleague for you who will help you through the technical 
                        journey.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Services















// import React, {useEffect, useState} from 'react';
// import softwareServices from "../../images/softwareServices.jpg";
// import softwareDevelopment from "../../images/softwareDevelopment.jpg";
// import mobileDevelopment from "../../images/mobileDevelopment.jpg";
// import itSupport from "../../images/itSupport.jpg";
// import dedicatedTeam from "../../images/dedicatedTeam.png";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import "./service.styles.css"

// function Services() {    
//     const [serviceDescription, toggleServiceDescription] = useState(false)
//     const [hide, setHide] = useState(true)
//     useEffect(() => {
//         Aos.init({duration: 2000});
//     }, [])

//     function handleFnc(e, index){
//         e.preventDefault();
//         toggleServiceDescription(serviceDescription => !serviceDescription);
//         setHide (hide => !hide )    
//     }

//     return (
//     <>
//         <div className="servicesTitle">
//                 <p className="caseStudyDescription">OUR SERVICES</p>
//         </div>
//         <div className="softwareServiceImage">
//                 <img src={softwareServices} alt=""/>
//         </div>
//         <div className="serviceSection">  
//             <div className="subSection">         
//                 <div className="cardContainer">
//                     <div className="serviceCard" data-aos="fade-right">
//                         <img className="serviceImage" src={softwareDevelopment} alt=""/>
//                     </div>
//                     <div className="serviceDescription">
//                         <h2 className="cardTitle" data-aos="fade-down">Software Development</h2>
//                         <p className="cardDescription" data-aos="fade-up">
//                             We are specialized in software development across a 
//                             full range of trendy technologies 
//                             {serviceDescription && <span id="1">from frontend to backend. We are focused on ever 
//                                 best user experience and our developers have an 
//                                 extensive understanding and experience.
//                             </span>}
//                             <a data-aos="fade-right" className="showSearviceDescription" href="" 
//                                 onClick={handleFnc}>
//                                 {hide ? 'see more...' : 'hide >>'}                
//                             </a>
//                         </p>                    
//                     </div>
//                 </div> 
//                 <div className="cardContainer">                   
//                     <div className="serviceDescription">
//                         <h2 className="cardTitle" data-aos="fade-down">Mobile App Development</h2>
//                         <p className="cardDescription" data-aos="fade-up">
//                             Mobile apps are considered to be one of the most powerful 
//                             tools for contacting  
//                             {serviceDescription && 
//                             <span>the target audience in terms of business. We build windows, ios 
//                                 and android apps.With best UI/UX design we ensure to 
//                                 extend the reach of your business to mobile users.
//                             </span>}
//                             <a data-aos="fade-right" className="showSearviceDescription" href="" 
//                                 onClick={handleFnc}>
//                                 {hide ? 'more details...' : 'hide details >>'}                
//                             </a>
//                         </p>
//                     </div>
//                     <div className="serviceCard" data-aos="fade-left">
//                         <img className="serviceImage" src={mobileDevelopment} alt=""/>
//                     </div>
//                 </div>
//             </div>
//             <div className="subSection">
//                 <div className="cardContainer">
//                     <div className="serviceCard" data-aos="fade-right">
//                         <img className="serviceImage" src={itSupport} alt=""/>
//                     </div>
//                     <div className="serviceDescription">
//                         <h2 className="cardTitle" data-aos="fade-down">IT Support</h2>
//                         <p className="cardDescription" data-aos="fade-up">
//                             Our experts provide on-site and remote technical support 
//                             to your business and  
//                             {serviceDescription && 
//                             <span>personal user support. We support removing a virus infection, figuring 
//                                 out why your computer is running slow, having software 
//                                 configured and setting up a new machine.
//                             </span> }
//                             <a data-aos="fade-right" className="showSearviceDescription" href="" 
//                                 onClick={handleFnc}>
//                                 {hide ? 'more details...' : 'hide details >>'}                
//                             </a>
//                         </p>
//                     </div>
//                 </div>
//                 <div className="cardContainer">                   
//                     <div className="serviceDescription">
//                         <h2 className="cardTitle" data-aos="fade-down">Hire a dedicated team or developer</h2>
//                         <p className="cardDescription" data-aos="fade-up">
//                             Customers come first and if you think you need a dedicated 
//                             developer or a 
//                             {serviceDescription && 
//                             <span>dedicated team to work on your project for a time frame, then you are 
//                                 at the right place. We make it possible for you to choose 
//                                 a colleague for you who will help you through the technical 
//                                 journey.
//                             </span> }
//                             <a data-aos="fade-right" className="showSearviceDescription" href="" 
//                                 onClick={handleFnc}>
//                                 {hide ? 'more details...' : 'hide details >>'}                
//                             </a>
//                         </p>
//                     </div>
//                     <div className="serviceCard" data-aos="fade-left">
//                         <img className="serviceImage" src={dedicatedTeam} alt=""/>
//                     </div>
//                 </div>
//             </div>            
//         </div>
//         </>
//     );
// }

// export default Services
