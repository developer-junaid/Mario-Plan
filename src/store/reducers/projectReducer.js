// Initial State
const initialState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with junaid", content: "blah blah blah" },
  ],
};

// Auth Reducer
const projectReducer = (state = initialState, action) => {
  // Actions
  // eslint-disable-next-line default-case
  switch (action.type) {
    // If Create Project
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;

    // If Error occurs
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;

    // If Create Project
    case "CREATE_NOTIFICATION":
      console.log("created notification", action.notification);
      return state;

    // If Error occurs
    case "CREATE_NOTIFICATION_ERROR":
      console.log("create notification error", action.err);
      return state;

    // If something else occurs
    default:
      return state;
  }
};

export default projectReducer;
