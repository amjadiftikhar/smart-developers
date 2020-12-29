import React from 'react';
import Tool from "./ToolCard";
import toolsObj from "./tools.obj";
import "./tool.styles.css";

function Tools() {
    return (
        <div className="servicesContainer">
            <div className="serviceSectionTitle">
                <p>OUR TECH STACK</p>
            </div>
            <div className="toolSection">
                {
                toolsObj.map((t, index) => {
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
