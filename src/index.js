import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import {
  isLoaded,
  ReactReduxFirebaseProvider,
  getFirebase,
} from "react-redux-firebase";
import firebase from "./config/fbConfig";
import { createFirestoreInstance } from "redux-firestore";
import { Spinner } from "react-bootstrap";

// Create Store Apply thunk
const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);

// RRF Config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

// React Redux Firebase - Props
const rrfProps = {
  firebase,
  config: rrfConfig, // For setting up users,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

// Auth Is Loaded function
function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) {
    return (
      <div className="spinner-container">
        <Spinner animation="grow" variant="dark" className="spinner-item" />
      </div>
    );
  }
  return children;
}

// Render
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
