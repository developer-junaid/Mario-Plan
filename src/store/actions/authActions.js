import { createNotification } from "./functions/functions";

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

// Sign Out Action Creator
export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    // Initialize firebase
    const firebase = getFirebase();

    // Sign Out
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Success
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

// Sign Out Action Creator
export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase }) => {
    // Initialize Firebase
    const firebase = getFirebase();
    // Initialize Firestore
    const firestore = firebase.firestore();

    // Generate user
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        // Success
        // Add Data to firestore collection 'users'
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          })
          .then(() => {
            // User and record created
            dispatch({ type: "SIGNUP_SUCCESS" });

            // Add Notification for user joined
            const notification = {
              content: "Joined the party",
              user: `${newUser.firstName} ${newUser.lastName}`,
              time: new Date(),
            };

            createNotification(firestore, notification, dispatch);
          });
      })
      .catch((err) => {
        // If something went wrong
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
