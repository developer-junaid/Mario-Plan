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

    // Sign Out Success
    case "SIGNOUT_SUCCESS":
      console.log("Sign out success");
      return state;

    // Sign Up Success
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null,
      };

    // Sign Up Error
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message,
      };

    // Default
    default:
      return state;
  }
};

export default authReducer;
