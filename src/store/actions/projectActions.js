export const createProject = (project) => {
  return (dispatch, getState, { getFirebase }) => {
    // Make async call to database
    // Setup Database
    const firestore = getFirebase().firestore();
    // Add Project to collection
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Hassan",
        authorLasttName: "Raza",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        // Dispatch Create Project Action
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        // Dispatch the Error Action
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });

    // Database //
  };
};
