import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rookReducer from "../reducers/rookReducer";
import popReducer from "../reducers/popReducers";
import hiphopReducer from "../reducers/hiphopReducers";
import searchReducer from "../reducers/searchReducer";
import selectedSongReducer from "../reducers/selectedSongReducer";
import likeReducer from "../reducers/likeReducer";
import playlistReducer from "../reducers/playlistReducer";

const unifiedReducer = combineReducers({
  rook: rookReducer,
  pop: popReducer,
  hiphop: hiphopReducer,
  search: searchReducer,
  selectedSong: selectedSongReducer,
  liked: likeReducer,
  playlist: playlistReducer,
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;
