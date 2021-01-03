import React, {useEffect, useState} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function ProjectCard(props) {
    const [projDescription, toggleProjDescription] = useState(false)
    const [hide, setHide] = useState(true)
    useEffect(() => {
        Aos.init({duration: 3000});        
    }, [projDescription])

    function handleFnc(e){
        e.preventDefault();
        toggleProjDescription(projDescription => !projDescription);
        setHide (hide => !hide )    
    }
    return (
        <div className="projectCard">
            <div className="projDescriptionSection">
                <span data-aos="fade-left" className="projectTitle">
                    {props.projectTitle}
                </span>
                <p className="projectDescription">
                    {projDescription && props.description}
                </p>
                <a data-aos="fade-right" className="showDescription" 
                    href="" onClick={handleFnc}>
                    {hide ? 'more details...' : 'hide details >>'}                
                </a>
            </div>
            <div className="projImageSection">
                <img data-aos="fade-right" className="projectImage" 
                    src={props.projectImage} alt=""
                />
            </div>
        </div>
    )
}

export default ProjectCard;
