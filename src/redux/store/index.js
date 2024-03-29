import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rookReducer from "../reducers/rookReducer";
import popReducer from "../reducers/popReducers";
import hiphopReducer from "../reducers/hiphopReducers";

const unifiedReducer = combineReducers({
  rook: rookReducer,
  pop: popReducer,
  hiphop: hiphopReducer,
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;
