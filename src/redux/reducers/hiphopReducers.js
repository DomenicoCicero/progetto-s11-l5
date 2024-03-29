import { GET_HIPHOP } from "../actions";

const initialState = {
  content: [],
};

const hiphopReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HIPHOP:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default hiphopReducer;
