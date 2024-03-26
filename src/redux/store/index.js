import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import jobsReducer from "../reducers/jobsReducer";

const totalReducers = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: totalReducers,
});

export default store;
