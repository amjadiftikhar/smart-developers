import React from 'react';

function Tool(props) {
    return (
        <div className="toolCard">
            <img className="toolImage" src={props.toolImage} alt=""/>
            <span className="toolName">{props.toolName}</span>
        </div>
    )
}

export default Tool;
