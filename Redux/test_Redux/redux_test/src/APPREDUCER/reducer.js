
const intialState={
    data:[],
    isAuth: false,
    isloading: false,
    isError: false
}

const reducer=(state=intialState, action)=> {
    const {type, payload} = action 
    
    switch(type){
        case type.GET_DATA_REQUEST:{
           return {
            ...state,
            isError: false,
            isloading: true
           }
        }
        case type.GET_DATA_SUCCESS:{
           // console.log(payload)
            return {
             ...state,
             data: [...payload],
             isError: false,
             isloading: false
            }
         }
         case type.GET_DATA_FAILURE:{
            return {
             ...state,
             isError: true,
             isloading: false
            }
         }
         default : 
         return state
    }

}

export {reducer}