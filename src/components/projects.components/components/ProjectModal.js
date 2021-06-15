import React from 'react';
import './projectModal.styles.css';

function ProjectModal({project, handleClose}) {
    
    return (
        <div className='modal displayBlock' 
            // close modal when one clicks outside of the modal 
            onClick={() => { handleClose() }} >
            <section className="modalMain">
                <h1 className='modalProjectTitle'>{project.projectTitle}</h1>
                <div className="modalProjectSection">
                    {/* <div className="projectVisual">
                        <img src={project.projectImage} alt="project image" />
                    </div> */}
                    <div className="projectVisual">
                        <video className="projectImage" 
                            controls loop autoPlay muted >
                            <source src={project.projectVideo} />
                        </video>
                    </div>
                    <div className="projectModalDescription">
                        <p> {project.description} </p>
                    </div>  
                </div>              
                <button className="closeBtn" onClick={handleClose}>Back</button>
            </section>
        </div>
    )
}

export default ProjectModal
