import * as types from "./actionType";

const handleincrement = () => {
  // setCount((prev)=> prev+1)
  return { type: types.INCREMENT, payload: 1 };

  // console.log(store.getState())
};
const handledecrement = () => {
  //  setCount((prev)=> prev-1)
  return { type: types.DECREMENT, payload: 1 };
  // console.log(store.getState())
};

const todosRequest = () => {
  return { type: types.GET_TODOS_REQUEST };
};

const todosSuccess = (payload) => {
  return { type: types.GET_TODOS_SUCCESS, payload };
};

const todosFailure = () => {
  return { type: types.GET_TODOS_FAILURE };
};

const addTodoRequest = () => {
  return { type: types.ADD_TODOS_REQUEST };
};

const addTodoSuccess = (payload) => {
  return { type: types.ADD_TODOS_SUCCESS, payload };
};

const addTodoFailure = () => {
  return { type: types.ADD_TODOS_FAILURE };
};

export {
  todosFailure,
  todosRequest,
  todosSuccess,
  handledecrement,
  handleincrement,
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess
};
