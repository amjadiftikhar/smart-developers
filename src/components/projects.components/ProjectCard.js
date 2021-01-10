import React, {useEffect, useState} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function ProjectCard(props) {
    const [projDescription, toggleProjDescription] = useState(false)
    const [hide, setHide] = useState(true)
    useEffect(() => {
        Aos.init({duration: 2000});        
    }, [projDescription])

    function handleFnc(e){
        e.preventDefault();
        toggleProjDescription(projDescription => !projDescription);
        setHide (hide => !hide )    
    }
    return (
        <div className="projectCard" data-aos="fade-up">
            <div className="projDescriptionSection">
                <h4 className="projectTitle">
                    {props.projectTitle}
                </h4>
                <p className="projectDescription">
                    {projDescription && props.description}
                </p>
                <a className="showDescription" 
                    href="" onClick={handleFnc}>
                    {hide ? 'more details...' : 'hide details >>'}                
                </a>
            </div>
            <div className="projImageSection">
                <img className="projectImage" 
                    src={props.projectImage} alt=""
                />
            </div>
        </div>
    )
}

export default ProjectCard;
