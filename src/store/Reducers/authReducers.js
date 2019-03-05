const initialState = {
  authError: null
}

 const AuthReducer =  (state = initialState, action) => {
  switch (action.type){
  case 'SIGNIN_ERROR':
    console.log("Signin error")
    return{
      ...state,
      authError: action.err.message
    }

  case 'SIGNIN_SUCCESS':
  console.log("Signin Success")
  return {
    ...state,
    authError: null
  }

  case "SIGNOUT_SUCCESS":
  console.log("Successfully signed out");
  return state

  case "SIGNUP_SUCCESS":
  console.log("Successfully signed up")
  return {
    ...state,
    authError: null
  }

  case "SIGNUP_ERROR":
  console.log("Sign up failed")
  return {
    ...state,
    authError: action.err.message
  }
    
  default:
    return state
  }
}
export default AuthReducer