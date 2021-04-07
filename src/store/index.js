//reducers..
import { combineReducers } from 'redux';
import userReducer from './reducers/usersListReducer';
import postsReducer from './reducers/postsReducer';
import userDetailReducer from './reducers/userDetailReducer';
export default combineReducers({
    users: userReducer,
    posts: postsReducer,
    userDetail: userDetailReducer
}); 