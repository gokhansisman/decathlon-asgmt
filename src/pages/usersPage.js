import React, { useEffect, useState } from 'react'
import {
    Redirect
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetch_users_list } from '../store/actions/actions';
import history from '../history'

import Pagination from '@material-ui/lab/Pagination';
import UserCard from '../components/userCard'

import '../styles/user_card.css'
function UsersPage() {
    const postsDispatch = useDispatch();

    const [page, setPage] = useState(1);
    const { users_list } = useSelector(state => state.users);
    const [_id, setID] = useState(23);
    useEffect(() => {
        postsDispatch(fetch_users_list(page));
    }, [page])

    function handleUser(id) {
        setID(id);
        history.push(`/users/${_id}`);
        return <Redirect to={`/users/${_id}`} />
    }

    if (typeof _id === 'string') return <Redirect to={`/users/${_id}`} />

    return (
        <div className="user-container">
            {users_list && users_list.data.map((user, index) =>

                <div key={index} onClick={e => handleUser(user.id)} className="user-content">
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
            <div style={{ flex: 1 }}>
                {users_list && <Pagination color="primary" count={Math.floor(users_list.total / 10) - 1} page={page} onChange={(event, value) => setPage(value)} />}
            </div>
        </div >
    )
}
export default UsersPage