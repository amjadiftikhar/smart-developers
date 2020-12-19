import React from 'react';
import Banner from "../banner.components/Banner";
import Services from "../services.components/Services";
// import Service from "../service.components/Service";
import Tools from "../technologies.components/Tools";
// import servicesObj from "../service.components/services.obj";
import "./home.styles.css";

const Home  = () => {
    return (
        <div className="mainContainer">
            <Banner/>
            <Services/> 
            {/* <div className="serviceSection">
                { servicesObj.map(s => {
                    return (
                        <Service title={s.title} description={s.description}/>
                    )
                }) }
            </div> */}
            <Tools/>
        </div>
    )
}

export default Home;
