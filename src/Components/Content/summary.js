import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import callALetter from '../../store/Actions/homeActions'

class Summary extends Component {
    render() {
        const { auth } = this.props
        if(!auth.uid) <Redirect to="/signin" />
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
 return {
     auth: state.firebase.auth
 }   
}

export default connect(mapStateToProps)(Summary)