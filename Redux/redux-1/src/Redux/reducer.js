import * as data from "./actionType"
import {loadData, saveData} from "../Utils/actionStore"



const intialstate={
  counter: loadData("counter")||5,
  todos:[],
  isloading: false,
  isError: false
}

const reducer = (oldstate =intialstate, action) => {
  
  switch (action.type) {
    case data.INCREMENT: {
    let newCounterIncrement = oldstate.counter + action.payload 
    saveData("counter", newCounterIncrement)
    return{...oldstate, counter: newCounterIncrement}
    }
    case data.DECREMENT: {
      let newCounterDecrement = oldstate.counter - action.payload 
      saveData("counter", newCounterDecrement)
      return{...oldstate, counter: newCounterDecrement}
    }

    case data.GET_TODOS_REQUEST :{
      return{
         ...oldstate,
         isloading: false,
         isError: false
      }
    }
    case data.GET_TODOS_SUCCESS :{
      return{
        ...oldstate,
        isloading: false,
        isError:false,
        todos: [...action.payload]
      }
    }
    case data.GET_TODOS_FAILURE :{
      return{
        ...oldstate,
        isloading: false,
        isError: true
      }
    }

    default:
      return oldstate;
  }
};

export { reducer };
