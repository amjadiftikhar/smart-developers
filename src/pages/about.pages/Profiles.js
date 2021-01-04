import React from 'react';
import profilesObj from "./profiles.obj";
import {Container} from "react-bootstrap";
import ProfileCard from "./ProfileCard";

function Profiles() {
    return (
        <Container className="profileSection">
            <h1 className="sectionTitle">MEET OUR TEAM</h1>
            <div className="profilesContainer">
                {
                    profilesObj.map((p, index) => {
                        return(
                            <ProfileCard
                                key = {index} 
                                profileImage = {p.profileImage}
                                profileTitle = {p.profileTitle}
                                personalInfo = {p.personalInfo}
                            />
                        )
                    })
                }
            </div>
        </Container>
    )
}

export default Profiles
