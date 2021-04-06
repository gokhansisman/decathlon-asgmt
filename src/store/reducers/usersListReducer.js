const initialState = {
   users_list:null
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USERS_LIST':
        return{
          ...state,
          users_list:action.payload.users_list
        }
      default:
        return state
    }
  }
  
  export default reducer;