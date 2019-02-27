import React from 'react';
import { NavLink } from 'react-router-dom'


const SignedOutLinks = () => {
    return(
        <ul className="navbar-nav">
            <li className="nav-item"><NavLink to="/signin" className="nav-link ">Signin</NavLink></li>
            <li className="nav-item"><NavLink to="/signup" className="nav-link">Signup</NavLink></li>
        </ul>
    )
}
export default SignedOutLinks