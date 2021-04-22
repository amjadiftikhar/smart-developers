import React from 'react';
import PortfolioCatalog from "../../components/services.components/PortfolioCatalog"
import "./portfolioCatalogPage.styles.css"

const PortfolioCatalogPage = () => {
    return (
        <div className="pcPageSection" data-testid='pcPageId'>
            <PortfolioCatalog/>
        </div>
    )
}

export default PortfolioCatalogPage
