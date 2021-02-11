import React from 'react';
import './projectModal.styles.css'

function ProjectModal({project, handleClose}) {
    console.log('hello', project.projectTitle)
    return (
        <div className='modal displayBlock' >
            <section className="modalMain">
                <h1 className='projectTitle'>{project.projectTitle}</h1>
                <div className="projectSection">
                    <div className="projectVisual">
                        <img src={project.projectImage} alt="project image" />
                    </div>
                    <div className="projectModalDescription">
                        <p> {project.description} </p>
                    </div>  
                </div>              
                <button className="closeBtn" onClick={handleClose}>Close</button>
            </section>
        </div>
    )
}

export default ProjectModal
