import React from 'react';
import Service from "./ServiceCard";
import servicesObj from "./services.obj";
import "./service.styles.css"

function Services() {
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
