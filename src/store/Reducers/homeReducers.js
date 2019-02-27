const initialState = {
    alphabets: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],

  }
const HomeReducer = (state = initialState, action) => { 
  switch (action.type) {    
    case "LETTER_ADDED":
    console.log("created letter", action.alphabet)
      return state
    case "FAIL_TO_ADD_LETTERS":
      console.log("FAIL_TO_ADD_LETTERS", action.err)
      return state

    default:
    return state
  }
  
}

export default HomeReducer