import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

// Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer, // To sync local State with Database
  firebase: firebaseReducer, // To sync firebase authentication service with our local state
});

export default rootReducer;
