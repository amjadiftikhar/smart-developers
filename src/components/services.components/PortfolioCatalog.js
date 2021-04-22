import {GiPriceTag} from "react-icons/gi";
import {FaExternalLinkSquareAlt} from "react-icons/fa";
import portfolioCatalogData from "../../assets/portfolioCatalogData.json";
import "../projects.components/projects.styles.css";
import "./portfoliocatalog.styles.css"
import React from "react";

function PortfolioCatalog() {
    return (
        <div className="projectsContainer" data-testid='projectId' >
            <div className="pc-title">
                <h2 className="caseStudyDescription">Portfolio Catalog</h2>
            </div>
            <div className="pcDescription">
                <p>Boost your business and career by choosing 
                    a portfolio for yourself. We do everything for you, 
                    from filling your data in the choosen portfolio to
                    customizing it and setting it up on the internet.
                </p>
                <p><b>What I get in price</b>
                    <ul>
                        <li>A brand new portfolio</li>
                        <li>A domain with your own name of choice</li>
                        <li>Your portfolio hosting</li>
                        All in one price.
                    </ul>
                </p>
            </div>
            <div className="pcContainer ">
                {
                    portfolioCatalogData.portfolioCatalog.map((proj, index) => {
                        return (
                            // Play the portfolio video
                            <div key={index} className="pcIndividual">
                                <video className="pcVideo" 
                                    controls loop autoPlay muted >
                                        <source src={proj.video} />
                                </video>
                                <div className="pcPriceAndLink ">
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
