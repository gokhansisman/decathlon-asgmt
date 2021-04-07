import React from "react";


import '../styles/post_card.css'
function UserCard({ email, firstName, id, lastName, picture, title
            }) {
    return (        
        <div className="user_card">
            <div className="user__card__image">
                <img src={picture} width="140" alt="user_image" />
            </div>
            <div className="user__card__content">
            <div className="user__card__id">
                    {id}
            </div>
                <p className="user__card__names">
                {title +' '+ firstName +' ' +lastName}
                </p>
                <p className="user__card__email">
                    {email}
                </p>

                
            </div>
        </div>
    );
}
export default UserCard;
