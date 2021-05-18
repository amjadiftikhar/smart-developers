import React from 'react';
import "./about.styles.css";

const Profile = (props) => {
    
    return (
        <div className="profileCard" data-testid='profileCardId'>
            <div className="profileImage">
                <img className="profilePic" src={props.profileImage} 
                    alt="profile image"/>
            </div>
            <div className="profileDetails">
                <h5> {props.profileTitle} </h5>
                <p className="personalInformation"> {props.personalInfo} </p>
            </div>
        </div>
    )
}

export default Profile;
