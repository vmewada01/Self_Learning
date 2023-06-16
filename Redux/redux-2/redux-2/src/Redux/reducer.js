import * as types from "../Redux/actionType";

const intialState = {
  tasks: [],
  isLoading: false,
  isError: false,
  status: false
};

const reducer = (oldstate = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TASK_REQUEST: {
      return {
        ...oldstate,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_TASK_SUCCESS: {
      return {
        ...oldstate,
        isLoading: false,
        isError: false,
        tasks: [...payload]
      };
    }
    case types.GET_TASK_FAILURE: {
      return {
        ...oldstate,
        isLoading: true,
        isError: true,
        tasks: "",
      };
    }
  

    default:
      return oldstate;
  }
};

export { reducer };
