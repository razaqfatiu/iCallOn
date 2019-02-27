const initialState = {
  authError: null
}

 const AuthReducer =  (state = initialState, action) => {
  switch (action.type){
  case 'SIGNIN_ERROR':
    console.log("Signin error")
    return{
      ...state,
      authError: "Signin failed"
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
    default:
    return state
  }
}
export default AuthReducer