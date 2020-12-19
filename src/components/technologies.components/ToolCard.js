import React from 'react';

function Tool(props) {
    return (
        <div className="toolCard">
            <span>{props.toolName}</span>
            <img src={props.toolImage} alt=""/>
        </div>
    )
}

export default Tool;
