import React from "react";


import '../styles/post_card.css'
function PostCard({ img, tags,text }) {

    return (
        <div className="card_advert">
            <div className="card__image">
                <img src={img} width="340" height="360" alt="author_image" />
            </div>
            <div className="card__content">
                <div className="card__head">
                    {text}
                    </div>
                <div className="card__tag">
                    {tags.map((tag, index) =>
                        <a>{`${tag}`}</a>
                    )}
                </div>
            </div>
        </div>
    );
}
export default PostCard;
