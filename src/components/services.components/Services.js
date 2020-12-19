import React from 'react';
import Service from "./ServiceCard";
import servicesObj from "./services.obj";

function Services() {
    return (
        <div className="serviceSection">
        { servicesObj.map(s => {
            return (
                <Service title={s.title} description={s.description}/>
            )
        }) }
    </div>
    )
}

export default Services;
