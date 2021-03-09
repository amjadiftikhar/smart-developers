import React, {useRef, useState} from 'react';
import projectData from "../../assets/data.json";
import ProjectCard from "./components/ProjectCard";
import "./projects.styles.css";
import ProjectModal from './components/ProjectModal';

function Projects() {  

   const portfolioSection = useRef(null)
   const [activeProject, setActiveProject] = useState('') 
   const [showActiveProject, setShowActiveProject] = useState(false)

   const showModal = (projectObject) => {
        setActiveProject(projectObject)
        setShowActiveProject(true)
   }

   const hideModal = () => {
       setShowActiveProject(false)
   }

    return (
        <div className="projectsContainer" data-testid='projectId' >
            <div className="caseStudyTitle">
                <h2 className="caseStudyDescription">OUR PROJECTS</h2>
            </div>
            <div className="projectSection" ref={portfolioSection}>
                { 
                    // map through project's data from json
                    projectData.projects.map((p, index) => {
                        return (
                            <ProjectCard key={index}
                                projectObject={p}
                                onClick={showModal}
                                id={p.id}
                                projectImage={p.projectImage}
                                projectTitle={p.projectTitle}
                                description={p.description} 
                            />
                        )
                    })   
                        
                }
            </div>  
            {
                showActiveProject  && 
                <ProjectModal project={activeProject} handleClose={hideModal} />
            }
        </div>  
    ) 
}

export default Projects;
