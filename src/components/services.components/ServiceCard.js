import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./service.styles.css";

function Service(props) {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, [])
    return (
        <div className="serviceCard" data-aos="flip-right">
            <h2 className="cardTitle" data-aos="fade-down">{props.title}</h2>
            <p className="cardDescription" data-aos="fade-up">
                {props.description}
            </p>
        </div>
    )
}

export default Service;
