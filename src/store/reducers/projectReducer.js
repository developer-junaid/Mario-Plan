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

    // If something else occurs
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};

export default projectReducer;
