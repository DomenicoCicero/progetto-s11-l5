import { SET_SELECTED_SONG } from "../actions";

const initialState = {
  song: null,
};

const selectedSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SONG:
      return {
        ...state,
        song: action.payload,
      };
    default:
      return state;
  }
};

export default selectedSongReducer;
