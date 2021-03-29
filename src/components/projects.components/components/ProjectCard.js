import React, {useEffect, useState} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function ProjectCard(props) {
    // const [projDescription, toggleProjDescription] = useState(false)
    // const [hide, setHide] = useState(true)

    useEffect(() => {
        Aos.init({duration: 2000});        
    }, [projDescription])

    // function to set toggle states
    // function handleFnc(e){
    //     e.preventDefault();
    //     toggleProjDescription(projDescription => !projDescription);
    //     setHide (hide => !hide )    
    // }

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
                    {/* <p className="projectDescription">
                        {projDescription && props.description}
                    </p>
                    <a className="showDescription" 
                        href="" onClick={handleFnc}>
                        {hide ? 'more details...' : 'hide details >>'}                
                    </a> */}
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
