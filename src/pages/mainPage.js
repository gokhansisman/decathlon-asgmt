import React, { useEffect, useState } from 'react'
import {
    Redirect
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetch_posts } from '../store/actions/actions';

import PostCard from '../components/postCard';
import PostAuthor from '../components/postAuthor';
import history from '../history';
import '../App.css'

function MainPage() {
    const postsDispatch = useDispatch();
    const { posts } = useSelector(state => state.posts);
    const [_id, setID] = useState(23);
    useEffect(() => {
        postsDispatch(fetch_posts(1));
    }, [])
    console.log(posts);
    function handlePost(id) {
        console.log(typeof (id))
        setID(id);
        history.push(`/users/${_id}`);
        return <Redirect to={`/users/${_id}`} />
    }

    if (typeof _id === 'string') return <Redirect to={`/users/${_id}`} />


    return (
        <div className="post-container">
            {posts && posts.data.map((data, index) =>
                <div style={{ width:'340px' }}>
                    <div onClick={e => handlePost(data.owner.id)}>
                        <PostAuthor
                            title={data.owner.title}
                            name={data.owner.firstName}
                            lastname={data.owner.lastName}
                            email={data.owner.email}
                            avatar={data.owner.picture}
                        />
                    </div>
                    <PostCard
                        img={data.image}
                        text={data.text}
                        tags={data.tags} />
                </div >
            )}

        </div >
    )
}
export default MainPage