import React, { useEffect, useState } from 'react'
import {
    Redirect
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetch_posts } from '../store/actions/actions';
import Pagination from '@material-ui/lab/Pagination';
import PostCard from '../components/postCard';
import PostAuthor from '../components/postAuthor';
import history from '../history';
import '../App.css'
function MainPage() {
    const postsDispatch = useDispatch();
    const [page, setPage] = useState(1);
    const { posts } = useSelector(state => state.posts);
    const [_id, setID] = useState(23);
    useEffect(() => {
        postsDispatch(fetch_posts(page));
    }, [page])

    function handlePost(id) {
        setID(id);
        history.push(`/users/${_id}`);
        return <Redirect to={`/users/${_id}`} />
    }

    if (typeof _id === 'string') return <Redirect to={`/users/${_id}`} />


    return (
        <div className="post-container">
            {posts && posts.data.map((data, index) =>
                <div key={index} style={{ width: '340px' }}>
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
                        tags={data.tags}
                        date={data.publishDate}
                        likes={data.likes} />
                </div >
            )}
            <div style={{ flex: 1 }}>
                {posts&&<Pagination color="primary" count={Math.floor(posts.total / 10)} page={page} onChange={(event, value) => setPage(value)} />}
            </div>
        </div >
    )
}
export default MainPage