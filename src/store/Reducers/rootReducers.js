import AuthReducer from './authReducers'
import HomeReducer from './homeReducers'

import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
//import Home from '../../Components/Content/home';

const RootReducer = combineReducers({
    auth: AuthReducer,
    home: HomeReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default RootReducer