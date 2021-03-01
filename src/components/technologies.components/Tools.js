import React from 'react';
import Tool from "./ToolCard";
import toolsData from "../../assets/data.json";
import "./tool.styles.css";

function Tools() {
    return (
        <div className="servicesContainer" data-testid='tools'>
            <div className="toolSectionTitle">
                <h2>OUR TECH STACK</h2>
            </div>
            <div className="toolSection">
                {
                // map through json for technologies
                toolsData.technologies.map((t, index) => {    
                    return(
                        <Tool key={index} toolName={t.toolName} 
                            toolImage={t.toolImage}
                        />
                    )
                })
                }
            </div>
        </div>
    )
}

export default Tools
