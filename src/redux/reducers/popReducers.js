import { GET_POP } from "../actions";

const initialState = {
  content: [],
};

const popReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POP:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default popReducer;
