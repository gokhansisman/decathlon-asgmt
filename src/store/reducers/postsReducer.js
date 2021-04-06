const initialState = {
    posts:null
   }
   
   const reducer = (state = initialState, action) => {
     switch (action.type) {
       case 'FETCH_POSTS':
         return{
           ...state,
           posts:action.payload.posts
         }
       default:
         return state
     }
   }
   
   export default reducer;