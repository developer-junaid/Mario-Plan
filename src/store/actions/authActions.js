// Sign In Action Creator
export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    // Initialize firebase
    const firebase = getFirebase();

    // Login If Correct Email and password
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        // Success
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        // Error
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};
