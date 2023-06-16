const funct = (currentState, action) => {
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

class Store {
  #state;
  #upDater;
  #listnerCallback;
  constructor(initState, updateFn) {
    this.#state = initState;
    this.#upDater = updateFn;
  }
  getState() {
    return this.#state;
  }
  get state() {
    return this.#state;
  }
  dispatch(action) {
    const currentState = this.#state;
    const newState = this.#upDater(currentState, action);
    this.#state = newState;

    if (currentState === newState) {
      return;
    } else {
      if (this.#listnerCallback) {
        this.#listnerCallback();
      }
    }
  }

  subscribe(callback) {
    this.#listnerCallback = callback;
  }
}

const store = new Store({ count: 1 }, funct);

 store.subscribe(()=>{
    console.log(`store got changed`)
    console.log(store.state)
 })

// console.log(store.state);
store.dispatch({ type: "INCREMENT_COUNT" });
// console.log(store.getState());
// console.log(store.state);
store.dispatch({ type: "DECREMENT_COUNT" });
// console.log(store.state);
store.dispatch({ type: "INCREMENT_COUNT" });
store.dispatch({ type: "INCREMENT_COUNT" });
store.dispatch({ type: "INCREMENT_COUNT" });
store.dispatch({ type: "DECREMENT_COUNT" });
