import React from 'react';
import Projects from '../../components/projects.components/Projects';
import "./portfolio.styles.css";

const Portfolio = () => {
    return (
        <div className="portfolioContainer" data-testid='portfolioId'>
            <Projects/>
        </div>
    )
}

export default Portfolio;
