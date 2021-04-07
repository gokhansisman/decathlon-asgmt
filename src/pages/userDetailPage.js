import React, {
    useEffect
} from 'react'
import {
    useParams
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetch_user_byID } from '../store/actions/actions';

import UserDetailsCard from '../components/userDetailsCard';

function UserDetailPage() {
    const userDetailDispatch = useDispatch();
    const { userDetail } = useSelector(state => state.userDetail);
    const { id } = useParams()
    useEffect(() => {
        userDetailDispatch(fetch_user_byID(id));
    }, [])
    return (
        <div>
            {userDetail && <UserDetailsCard
                dateOfBirth={userDetail.dateOfBirth}
                email={userDetail.email}
                firstName={userDetail.firstName}
                gender={userDetail.gender}
                id={userDetail.id}
                lastName={userDetail.lastName}
                location={userDetail.location}
                phone={userDetail.phone}
                picture={userDetail.picture}
                registerDate={userDetail.registerDate}
                title={userDetail.title} />}
        </div >
    )
}
export default UserDetailPage