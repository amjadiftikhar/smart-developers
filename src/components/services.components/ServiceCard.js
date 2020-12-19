import React from 'react';
import "./service.styles.css";

function Service(props) {
    return (
        <div className="serviceCard">
            <h2 className="cardTitle">{props.title}</h2>
            <p className="cardDescription">{props.description}</p>
        </div>
    )
}

export default Service;
