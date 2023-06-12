const initialState={
       token: "",
       iaAuth: false,
    isLoading: false,
    
}

const reducer =(state=initialState,action)=>{
      switch(action.type){
        case 'ADD_LOGIN_REQ':{
            return {
                ...oldstate,
               isLoading: true,
                               
            }
        }
        case 'ADD_LOGIN_SUCCESS': {
            return {
                ...oldstate,
                isLoading: false,
                isAuth: true,
                token: payload
            }
        }
        case 'ADD_LOGIN_FAILURE': {
            return {
                ...oldstate,
                isLoading: true,
                isAuth: false,
                token: ""
            }
        }
        default : {
            return oldstate
        }
        
      }


}


