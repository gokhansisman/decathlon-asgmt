import React,{ useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { fetch_posts } from '../store/actions/actions';


function MainPage() {
    const postsDispatch = useDispatch();
    const { posts } = useSelector(state => state.posts);
    useEffect(() => {
        postsDispatch(fetch_posts(1));
    }, [])
    console.log(posts);
    return (
        <div>
            MainPage
        </div >
    )
}
export default MainPage