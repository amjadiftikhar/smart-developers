import React, {useEffect} from 'react';
import Service from "./ServiceCard";
import servicesObj from "./services.obj";
import Aos from "aos";
import "aos/dist/aos.css";
import "./service.styles.css"

function Services() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <div className="serviceSection">
        { servicesObj.map((s, index) => {
            return (
                <Service key={index} title={s.title} 
                    description={s.description}                    
                />
            )
        }) }
    </div>
    )
}

export default Services;
