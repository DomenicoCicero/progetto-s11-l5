import { GET_ROOK } from "../actions";

const initialState = {
  content: [],
};

const rookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOK:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default rookReducer;
