import React from 'react';
import Services from "../../components/services.components/Services";
import "./servicesPage.styles.css";

const ServicesPage = () => {
    return (
        <div className="servicesPageSection" data-testid='servicesPageId'>
            <Services/>
        </div>
    )
}

export default ServicesPage
