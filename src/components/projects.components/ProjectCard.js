import React from 'react';

function ProjectCard(props) {
    return (
        <div className="projectCard">
            <img className="projectImage" src={props.projectImage} alt=""/>
            <span className="projectTitle">{props.projectTitle}</span>
            <p className="projectDescription">{props.description}</p>
        </div>
    )
}

export default ProjectCard;
