import React from 'react';
import PortfolioCatalog from "../../components/services.components/PortfolioCatalog"
import "../../pages/services.pages/servicesPage.styles.css"

const PortfolioCatalogPage = () => {
    return (
        <div className="servicesPageSection" data-testid='servicesPageId'>
            <PortfolioCatalog/>
        </div>
    )
}

export default PortfolioCatalogPage
