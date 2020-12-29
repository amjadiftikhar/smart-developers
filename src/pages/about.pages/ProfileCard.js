import React from 'react';
import {Container} from "react-bootstrap";
import "./about.styles.css";

function Profile(props) {
    return (
        <Container className="profileCard">
            <div className="profileImage">
                <img className="profilePic" src={props.profileImage} 
                    alt="profile image"/>
            </div>
            <div className="profileDetails">
                <h5> {props.profileTitle} </h5>
                <p className="personalInformation"> {props.personalInfo} </p>
            </div>
        </Container>
    )
}

export default Profile;
