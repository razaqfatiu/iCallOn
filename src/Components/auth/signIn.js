import React, { Component } from 'react'
import './auth.css'
import { connect } from 'react-redux';
import Redirect from 'react-router-dom/Redirect';
import { signIn } from '../../store/Actions/authActions'


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

handleOnChange = (ev) => {
    this.setState({ [ev.target.id ]: ev.target.value })
}

handleSignIn = (ev) => {
ev.preventDefault()
this.props.signIn(this.state)
}
    render() {
        const{ authError, auth } = this.props
        if(auth.uid) return <Redirect to="/" />
        return (
            <form className="bg-secondary">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" placeholder="Email" id="email"  onChange={this.handleOnChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" placeholder="Password" id="password" onChange={this.handleOnChange}/>
                </div>

                <button className="btn btn-primary" onClick={this.handleSignIn}>Signin</button>

                 <div className="text-warning text-center"> 
                  { authError ? <p> {authError} </p> : null }
                 </div> 

            </form>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
  
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)