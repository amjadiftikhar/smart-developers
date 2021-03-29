import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function ProjectCard(props) {

    useEffect(() => {
        Aos.init({duration: 2000});        
    }, [projDescription])

    return (
        <>
            {/* data-aos, applying animation on the section */}
            <div className="projectCard" data-aos="fade-up" data-testid='projectCard' 
                onClick={() => props.onClick(props.projectObject)} 
            >
                <div className="projDescriptionSection">
                    <h4 className="projectTitle">
                        {props.projectTitle}
                    </h4>
                </div>

                <div className="projImageSection">
                    <img className="projectImage" 
                        src={props.projectImage} alt=""
                    />
                </div>
            </div>
        </>
    )
}

export default ProjectCard;
