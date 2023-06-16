

export const GitReducer= (state,action)=>{
  switch (action.type){
     case  "FETCH_GITHUB_USER_LOADING":{
        return {
            ...state,
            isLoading: true,
            isError: false
        }
     }
     case  "FETCH_GITHUB_USER_SUCCESS":{
        return {
            ...state,
            isLoading: false,
       
            data: action.payload
        }
     }
     case  "FETCH_GITHUB_USER_FAILURE":{
        return {
            ...state,
            isLoading: false,
            isError: true
        }
     }
     default:
        return state
     
  }


}

export const AuthReducer=(state,action)=>{
   switch(action.type){
       case "LOGIN_SUCCESS":{
        return {
         ...state,
         isAuth: true,
         token: action.payload
        }

       }
       case "LOGOUT_SUCCESS":{
         return {
          ...state,
          isAuth: false,
          token: null
         }
 
        }
        default:
         return state
        

   }
}