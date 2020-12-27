import React, {useEffect, useState} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
// import {ShowHide} from "./ShowHide"

function ProjectCard(props) {
    const [projDescription, toggleProjDescription] = useState(false)
    const [hide, setHide] = useState(true)
    useEffect(() => {
        Aos.init({duration: 3000});        
    }, [projDescription])

    function handleFnc(e){
        e.preventDefault();
        toggleProjDescription(projDescription=>!projDescription);
        setHide (hide => !hide )    
    }
    return (
        <div className="projectCard">
            <img data-aos="fade-right" className="projectImage" 
                src={props.projectImage} alt=""/>
            <span data-aos="fade-left" className="projectTitle">
                {props.projectTitle}
            </span>
            <a data-aos="fade-right" className="showDescription" href="" 
                onClick={handleFnc}>
                    {hide ? 'more details...' : 'hide details >>'}                
            </a>
            <p className="projectDescription">
                {projDescription && props.description}
            </p>
        </div>
    )
}

export default ProjectCard;
