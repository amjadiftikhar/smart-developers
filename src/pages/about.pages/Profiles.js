import React from 'react';
import profileData from "../../assets/data.json";
import {Container} from "react-bootstrap";
import ProfileCard from "./ProfileCard";

const Profiles = () => {
    return (
        <Container className="profileSection" data-testid='profilesId'>
            <h1 className="sectionTitle">MEET OUR TEAM</h1>
            <div className="profilesContainer">
                {
                    // map through profile data from json
                    profileData.profile.map((p, index) => {
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
