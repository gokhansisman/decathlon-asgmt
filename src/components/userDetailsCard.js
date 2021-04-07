import React from "react";


import '../styles/user_card.css'

import Moment from 'moment';


function UserDetailsCard({
    dateOfBirth,
    email,
    firstName,
    gender,
    id,
    lastName,
    location,
    phone,
    picture,
    registerDate,
    title
}) {

    return (
        <div className="profile-details">
            <div className="user__details__card">
                <div className="user__details__image">
                    <img src={picture} width="320" alt="user_image" />
                </div>
                <div className="user__details__content">
                    <p>{id}</p>
                    <p>{title + ' ' + firstName + ' ' + lastName}</p>
                    <p><strong>Gender:</strong> {gender}</p>
                    <p><strong>Date of Birth:</strong> {Moment(dateOfBirth).format('MMMM Do, YYYY')}</p>
                    <p><strong>Register Date:</strong> {Moment(registerDate).format('MMMM Do, YYYY')}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p> <strong>Phone:</strong> {phone}</p>
                    <p> <strong>Address:</strong> {location.country +', '+ location.state +', '+ location.city +', '+ location.street}</p>
                   
                </div>
            </div>
        </div>
    );
}
export default UserDetailsCard;
