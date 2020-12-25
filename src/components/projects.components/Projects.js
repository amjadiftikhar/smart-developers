import React from 'react';
import projectsObj from "./projects.obj";
import ProjectCard from "./ProjectCard";
import "./projects.styles.css";

function Projects() {
    return (
        <div className="projectSection">
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
    )
}

export default Projects;
