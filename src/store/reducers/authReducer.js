// Initial State
const initState = {
  authError: null,
};

// Auth Reducer
const authReducer = (state = initState, action) => {
  // check action
  switch (action.type) {
    // If login error
    case "LOGIN_ERROR":
      console.log("Login error");
      return {
        ...state,
        authError: "Login failed",
      };

    // If login success
    case "LOGIN_SUCCESS":
      console.log("Login success");
      return {
        ...state,
        authError: null,
      };

    // Default
    default:
      return state;
  }
};

export default authReducer;
