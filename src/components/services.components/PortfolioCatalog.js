import {GiPriceTag} from "react-icons/gi";
import {FaExternalLinkSquareAlt} from "react-icons/fa";
import portfolioCatalogData from "../../assets/portfolioCatalogData.json";
// import "../projects.components/projects.styles.css";
import "./portfoliocatalog.styles.css"
import React from "react";

function PortfolioCatalog() {
    return (
        <div className="catalogMainContainer" data-testid='projectId' >
            <div className="pCatalogTitle">
                <h2 className="caseStudyDescription">Portfolio Catalog</h2>
            </div>
            <div className="catalogDescription">
                <p>Boost your business and career by choosing 
                    a portfolio for yourself. We do everything for you, 
                    from filling your data in the choosen portfolio to
                    customizing it and setting it up on the internet.
                </p>
            </div>

            <div className="offerSection">
                <h3 className="offerTitle"><b>What we get in price</b></h3>
                <ul>
                    <li>A brand new portfolio</li>
                    <li>A domain with your own name of choice</li>
                    <li>Your portfolio hosting</li>
                </ul>
            </div>

            <div className="catalogContainer ">
                {
                    portfolioCatalogData.portfolioCatalog.map((proj, index) => {
                        return (
                            // Play the portfolio video
                            <div key={index} className="catalogCard">
                                <video className="catalogVideo" 
                                    controls loop autoPlay muted >
                                        <source src={proj.video} />
                                </video>
                                <div className="catalogPriceAndLink ">
                                    <span><GiPriceTag style={{marginLeft:'.8em', marginRight:'.5em'}} /><b>Price</b>: {proj.price}</span>
                                    <a href={proj.link} target="blank" className="pcLinkBtn"><FaExternalLinkSquareAlt style={{marginRight:'.5em'}} />Live Demo Link</a>
                                </div>
                            </div>
                        )
                    })   
                }
            </div>  
        </div>  
    ) 
}

export default PortfolioCatalog;
