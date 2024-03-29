import { ADD_LIKED_SONG, REMOVE_LIKED_SONG } from "../actions";

const initialState = {
  songs: [],
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKED_SONG:
      return {
        ...state,
        songs: state.songs.concat(action.payload),
      };
    case REMOVE_LIKED_SONG:
      return {
        ...state,
        songs: state.songs.filter(song => song.id !== action.payload),
      };
    default:
      return state;
  }
};

export default likeReducer;
