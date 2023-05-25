

export function CountReducer(state,action){
    switch(action.type){
        case "INCREMENT":{
          return{
            ...state ,
            count: state.count + action.amount
          }
        }
        case "DECREMENT":{
       return{
        ...state,
        count: state.count - action.amount
       }
        }
        default:
            return state;
    }
}
let initValue = {
    count: 0
  };

export const incrementAction = {type: "INCREMENT", amount:2000 }
// if amount ==0 payload=1000  if amount ==500 payload =2000
//export const incrementAction  = {type: "INCREMENT_AMOUNT", amount: 2000 }
export const decrementAction = { type: "DECREMENT", amount:1000 };
//console.log(state.count)
// console.log(initValue);
// let s = CountReducer(initValue, incrementAction);
// console.log(`after first time`, s);
// s = CountReducer({ count: 2 }, incrementAction);
// s = CountReducer(s, decrementAction);
// console.log(`last time`, s);


