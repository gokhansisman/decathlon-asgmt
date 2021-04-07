import React from "react";


import Moment from 'moment';
import '../styles/post_card.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function PostCard({ img, tags, text, date, likes }) {

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
                        <a key={index}>{`${tag}`}</a>
                    )}
                </div>
                <div className="card__bottom">
                    <p>
                        {Moment(date).format('MMMM Do, YYYY')}
                    </p>
                    <p>
                        <FavoriteBorderIcon/>{likes}
                    </p>
                </div>
            </div>
        </div>
    );
}
export default PostCard;
