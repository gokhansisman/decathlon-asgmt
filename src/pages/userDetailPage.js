import React,{ useEffect, useState } from 'react'
import {
    useParams
  } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetch_user_byID } from '../store/actions/actions';


function UserDetailPage() {
    const userDetailDispatch = useDispatch();
    const { user } = useSelector(state => state.userDetail);
    useEffect(() => {
        userDetailDispatch(fetch_user_byID("mCynCk9ntQGzX9uxgqDx"));
    }, [])
    console.log(user);
    const { id } = useParams()
    console.log(id)
    return (
        <div>
            User Detail Page
        </div >
    )
}
export default UserDetailPage