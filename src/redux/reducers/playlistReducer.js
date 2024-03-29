import {
  ADD_TO_PLAYLIST_HIPHOP,
  ADD_TO_PLAYLIST_POP,
  ADD_TO_PLAYLIST_ROOK,
  REMOVE_FROM_PLAYLIST_HIPHOP,
  REMOVE_FROM_PLAYLIST_POP,
  REMOVE_FROM_PLAYLIST_ROOK,
} from "../actions";

const initialState = {
  rookList: [],
  popList: [],
  hiphopList: [],
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYLIST_ROOK:
      return {
        ...state,
        rookList: state.rookList.concat(action.payload),
      };
    case ADD_TO_PLAYLIST_POP:
      return {
        ...state,
        popList: state.popList.concat(action.payload),
      };
    case ADD_TO_PLAYLIST_HIPHOP:
      return {
        ...state,
        hiphopList: state.hiphopList.concat(action.payload),
      };
    case REMOVE_FROM_PLAYLIST_ROOK:
      return {
        ...state,
        rookList: state.rookList.filter(song => song.id !== action.payload),
      };
    case REMOVE_FROM_PLAYLIST_POP:
      return {
        ...state,
        popList: state.popList.filter(song => song.id !== action.payload),
      };
    case REMOVE_FROM_PLAYLIST_HIPHOP:
      return {
        ...state,
        hiphopList: state.hiphopList.filter(song => song.id !== action.payload),
      };
    default:
      return state;
  }
};

export default playlistReducer;
