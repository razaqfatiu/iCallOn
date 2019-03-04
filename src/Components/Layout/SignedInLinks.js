import React from 'react';
import { NavLink } from 'react-router-dom'
import './layout.css'
import { connect } from 'react-redux';
import { signOut } from '../../store/Actions/authActions';


const SignedInLinks = (props) => {
    return(
        <ul className="navbar-nav">
            <li className="nav-item dni"> <NavLink to="/" className="nav-link btn btn-primary rounded-circle"> {props.profile.nickName}</NavLink></li>
            <li className="nav-item dni" onClick={props.signOut}> <a className="nav-link btn ">Signout</a></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
   return{ 
       signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)