import React from "react";


import '../styles/post_card.css'

function PostAuthor({title,name,lastname,email,avatar}) {

  return (
<div className="card_advert">
  <div className="card__content">
    <div className="card__profile">
      <div className="card__author-img">
        <img src={avatar} width="60px" alt="John doe wearing his hood" />
      </div>
      <div className="card__author-content">
        <div className="card__author">{title + ' ' +name +' '+ lastname}</div>
        <div className="card__dateNTime">
          <div className="card__date">{email}</div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
export default PostAuthor;
