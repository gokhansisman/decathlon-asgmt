export const fetch_posts = (page) => {
    const settings = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'app-id':'606b88c0823e802e473a81b7'
        }
      };
    return dispatch => {
        return fetch(`https://dummyapi.io/data/api/post?page=${page}&limit=10`,settings)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: 'FETCH_POSTS', payload: {
                        posts:json
                    }
                })
            })
    }
}



export const fetch_users_list = (page) => {
    const settings = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'app-id':'606b88c0823e802e473a81b7'
        }
      };
    return dispatch => {
        return fetch(`https://dummyapi.io/data/api/user?page=${page}&limit=10`,settings)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: 'FETCH_USERS_LIST', payload: {
                        users_list:json
                    }
                })
            })
    }
}



export const fetch_user_byID = (id) => {
    const settings = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'app-id':'606b88c0823e802e473a81b7'
        }
      };
    return dispatch => {
        return fetch(`https://dummyapi.io/data/api/user/${id}`,settings)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: 'FETCH_USERS_LIST', payload: {
                        userDetail:json
                    }
                })
            })
    }
}
