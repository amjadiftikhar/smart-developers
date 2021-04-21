import portfolioCatalogData from "../../assets/portfolioCatalogData.json";
import "../projects.components/projects.styles.css";
import "./portfoliocatalog.styles.css"

function PortfolioCatalog() {
    return (
        <div className="projectsContainer" data-testid='projectId' >
            <div className="pc-title">
                <h2 className="caseStudyDescription">Portfolio Catalog</h2>
                <p>Boost your business and career by choosing 
                    a portfolio for yourself. We do everything for you, 
                    from filling your data in the choosen portfolio to
                     customizing it and setting it up on the internet.</p>
            </div>
            <div className="projectSection">
                {
                    portfolioCatalogData.portfolioCatalog.map((proj, index) => {
                        return (
                            // Play the portfolio video
                            <div key={index}>
                                <video  width='600' height='300' 
                                    controls loop autoPlay muted >
                                        <source src={proj.video} />
                                </video>
                                <p>
                                    Price = {proj.price} <br />
                                    Link = <a href={proj.link} target="blank">Link to portfolio</a>
                                </p>
                            </div>
                        )
                    })   
                }
            </div>  
        </div>  
    ) 
}

export default PortfolioCatalog;
