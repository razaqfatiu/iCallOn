export const callALetter = (alphabet) => {
  return (dispatch, getState, { getFirebase, getFirestore}) => {
      
    const firestore = getFirestore()
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid
    firestore.collection("alphabets").add({
      ...alphabet,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId,
      createdAt: new Date()
    }).then(()=> dispatch({ type: "LETTER_ADDED", alphabet})
    ).catch(err => dispatch({ type: "FAIL_TO_ADD_LETTERS", err}))
  }
}
