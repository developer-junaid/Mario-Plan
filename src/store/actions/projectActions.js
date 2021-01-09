const createNotification = (firestore, notification, dispatch) => {
  firestore
    .collection("notifications")
    .add(notification)
    .then(() => {
      // Notification success
      dispatch({
        type: "CREATE_NOTIFICATION",
        notification,
      });
    })
    .catch((err) => {
      // Dispatch the Error Action
      dispatch({ type: "CREATE_NOTIFICATION_ERROR", err });
    });
};

// Create project
export const createProject = (project) => {
  return (dispatch, getState, { getFirebase }) => {
    // Make async call to database
    // Setup Database
    const firestore = getFirebase().firestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    // Add Project to collection
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLasttName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        // Dispatch Create Project Action
        dispatch({
          type: "CREATE_PROJECT",
          project,
        });

        // // Create Notification
        const notification = {
          content: "Added a new project",
          user: `${profile.firstName} ${profile.lastName}`,
          time: new Date(),
        };

        createNotification(firestore, notification, dispatch);
      })
      .catch((err) => {
        // Dispatch the Error Action
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });

    // Database //
  };
};
