import React from 'react';
import Typical from "react-typical";

function Slider() {
    return (
        <div>
            <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                    "We are specialized in software development", 2000, 
                    "We build mobile applications, the most powerful tool for any business", 2000,  
                    "We provide on-site and remote technical support and also personal user support.", 2000,
                    "At Smart Developers, a dedicated team for a project can be hired", 2000 
                ]}
            />       
        </div>
    )
}

export default Slider
