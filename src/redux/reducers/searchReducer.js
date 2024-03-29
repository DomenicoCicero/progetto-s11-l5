import { GET_SEARCH, SET_SEARCH } from "../actions";

const initialState = {
  content: [],
  search: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case GET_SEARCH:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
