import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";

// Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer, // To sync local State with Database
});

export default rootReducer;
