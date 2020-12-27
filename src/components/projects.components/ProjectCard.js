import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function ProjectCard(props) {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <div className="projectCard">
            <img data-aos="fade-right" className="projectImage" 
                src={props.projectImage} alt=""/>
            <span data-aos="fade-left" className="projectTitle">
                {props.projectTitle}
            </span>
            <p data-aos="fade-left" className="projectDescription">
                {props.description}
            </p>
        </div>
    )
}

export default ProjectCard;
