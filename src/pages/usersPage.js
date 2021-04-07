import React, { useEffect, useState } from 'react'
import {
    Link, Redirect
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetch_users_list } from '../store/actions/actions';
import history from '../history'

import UserCard from '../components/userCard'

import '../styles/user_card.css'
function UsersPage() {
    const postsDispatch = useDispatch();
    const { users_list } = useSelector(state => state.users);
    const [_id, setID] = useState(23);
    useEffect(() => {
        postsDispatch(fetch_users_list(1));
    }, [])
    console.log(users_list);

    function handleUser(id) {
        console.log(typeof (id))
        setID(id);
        history.push(`/users/${_id}`);
        return <Redirect to={`/users/${_id}`} />
    }

    if (typeof _id === 'string') return <Redirect to={`/users/${_id}`} />

    return (
        <div className="user-container">
            {users_list && users_list.data.map((user, index) =>

                    <div onClick={e => handleUser(user.id)} className="user-content">
                        <UserCard
                        email={user.email}
                        firstName={user.firstName}
                        id={user.id}
                        lastName={user.lastName}
                        picture={user.picture} 
                        title={user.title}

                        />
                </div >
            )}
        </div >
    )
}
export default UsersPage