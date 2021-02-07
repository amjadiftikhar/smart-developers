import React, {useRef, useState} from 'react';
import projectsObj from "./projects.obj";
import ProjectCard from "./ProjectCard";
import "./projects.styles.css";
import Hello from '../projectDescription.components/Hello';
import Hello2 from '../projectDescription.components/Hello2';
import Hello3 from '../projectDescription.components/Hello3';

function Projects() {  

   const portfolioSection = useRef(null)
   const [toggleHello, setToggleHello] = useState(0) 
   const [toggleHello1, setToggleHello1] = useState(0)
   const [toggleHello2, setToggleHello2] = useState(0) 

   const onClick = (id) => {
       console.log("ID of project", id)
    //    if(id==='0') {
    //    setToggleHello(1)
    // }
    // else if (id='1'){
    //     setToggleHello1(1)
    // }else if (id='2') {
    //     setToggleHello2(1)
    // }else{
    //     setToggleHello(0)
    // }
   }

    return (
        <div className="projectsContainer" >
            <div className="caseStudyTitle">
                <h2 className="caseStudyDescription">OUR PROJECTS</h2>
            </div>
            <div className="projectSection" ref={portfolioSection}>
                { toggleHello ? <Hello/> : toggleHello1 ? <Hello2/> : toggleHello2 ? <Hello3/> :
                    projectsObj.map((p, index) => {

                        return (
                            <ProjectCard key={index}
                                onClick={onClick}
                                id={p.id}
                                projectImage={p.projectImage}
                                projectTitle={p.projectTitle}
                                description={p.description} 
                            />
                        )
                    }) 
                }
            </div>
        </div>
    )
}

export default Projects;
