import React, {useRef} from 'react';
import projectsObj from "./projects.obj";
import ProjectCard from "./ProjectCard";
import "./projects.styles.css";

function Projects() {       
   const portfolioSection = useRef(null)
    return (
        <div className="projectsContainer" >
            <div className="caseStudyTitle">
                <h2 className="caseStudyDescription">OUR PROJECTS</h2>
            </div>
            <div className="projectSection" ref={portfolioSection}>
                {
                projectsObj.map((p, index) => {
                    return (
                        <ProjectCard key={index}
                            projectImage={p.projectImage}
                            projectTitle={p.projectTitle}
                            description={p.description} 
                        />
                    )
                })
                }
            </div>
        </div>
    )
}

export default Projects;
