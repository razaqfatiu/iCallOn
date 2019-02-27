import React from 'react';
import './layout.css'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './signedOutLinks'
import { connect } from 'react-redux';



const Navbar = (props) => {
    const { auth } = props
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">I_CALL_ON</Link>
                <div className="collapse navbar-collapse justify-content-end">
                {links}
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,

  }
}


export default connect(mapStateToProps)(Navbar)