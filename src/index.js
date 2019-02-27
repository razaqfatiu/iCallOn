import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './store/Reducers/rootReducers'
import { Provider } from 'react-redux'
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import FirebaseConfig from './config/FirebaseConfig'



const store = createStore(RootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(FirebaseConfig),
        reactReduxFirebase(FirebaseConfig, {attachAuthIsReady: true})
    )
    )

    // store.firebaseAuthIsReady.then(() => {
      
    // }).catch((err) => {
    //     console.log(`Failed:  ${err}`)
    // });
  ReactDOM.render( <Provider store={store}><App /></Provider> , document.getElementById("root"));
        registerServiceWorker();