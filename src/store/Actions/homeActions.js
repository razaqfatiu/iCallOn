export const callALetter = (alphabet) => {
  return (dispatch, getState, { getFirebase, getFirestore}) => {
      
    const firestore = getFirestore() 
    firestore.collection("alphabets").add({
      ...alphabet,
      createdAt: new Date()
    }).then(()=> dispatch({ type: "LETTER_ADDED", alphabet})
    ).catch(err => dispatch({ type: "FAIL_TO_ADD_LETTERS", err}))
  }
}
