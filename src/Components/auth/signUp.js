import React, { Component } from 'react'
import './auth.css'

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        nickName: '',
        password: '',
    }

    handleOnChange = (ev) => {
        this.setState({ [ev.target.id]: ev.target.value })
    }
    handleSignUp = (ev) => {
        ev.preventDefault()
    }
    render() {
        return (
            <form className="bg-secondary">
                <div className="form-group">
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Firstname" onChange={this.handleOnChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="lastname">Lastname</label>
                     <input type="text" className="form-control" id="lastName" placeholder="Lastname" onChange={this.handleOnChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Email" onChange={this.handleOnChange} /> 
                </div>

                <div className="form-group">
                    <label htmlFor="nickname">Nickname</label>
                    <input type="text" className="form-control" id="nickName" placeholder="Nickname" onChange={this.handleOnChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleOnChange} />
                </div>

                <button className="btn btn-primary" onClick={this.handleSignUp}>Signup</button>
            </form>
        )
    }
}
export default SignUp