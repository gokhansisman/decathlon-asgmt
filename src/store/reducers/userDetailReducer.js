const initialState = {
    userDetail:null,
   }
   
   const reducer = (state = initialState, action) => {
     switch (action.type) {
       case 'FETCH_USER_DETAIL':
         return{
           ...state,
           userDetail:action.payload.userDetail
         }
       default:
         return state
     }
   }
   
   export default reducer;