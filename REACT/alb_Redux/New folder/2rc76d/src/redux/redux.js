export const reducer = (currentState, action) => {
  if (action.type === "INCREMENT_COUNT") {
    //console.log(currentState)
    return {
      ...currentState,
      count: currentState.count + 1,
    };
  } else if (action.type === "DECREMENT_COUNT") {
    return {
      ...currentState,
      count: currentState.count - 1,
    };
  } else {
    return currentState;
  }
};