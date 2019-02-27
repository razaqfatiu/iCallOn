import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Layout/Navbar'
import SignIn from './Components/auth/signIn'
import SignUp from './Components/auth/signUp'
import Home from './Components/Content/home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
