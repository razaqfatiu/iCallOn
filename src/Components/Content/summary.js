import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { ButtonGroup, Button, Jumbotron } from 'react-bootstrap';


class Summary extends Component {
    render() {
        const { auth, alphabets, profile } = this.props
        // if(auth.currentUser) return <Redirect to="/signin" />
               return (
            <div>
                <div>
                    {alphabets && alphabets.map(alphabet => {
                        if(auth.uid === alphabet.authorId){
                        return (
                            <div key={alphabet.id}>
                            <Jumbotron>
                            <h1>{profile.nickName}</h1>
                            <h2>{alphabet.letter}</h2>
                            <i>{alphabet.name} </i> <ButtonGroup size="sm"><Button>Correct</Button><Button>Wrong</Button></ButtonGroup>
                            <i> {alphabet.place} </i> <ButtonGroup size="sm"><Button>Correct</Button><Button>Wrong</Button></ButtonGroup>
                            <i> {alphabet.animal} </i> <ButtonGroup size="sm"><Button>Correct</Button><Button>Wrong</Button></ButtonGroup>
                            <i> {alphabet.thing} </i> <ButtonGroup size="sm"><Button>Correct</Button><Button>Wrong</Button></ButtonGroup>
                            </Jumbotron>
                             </div>
                             )}
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
 return {
     auth: state.firebase.auth,
     alphabets: state.firestore.ordered.alphabets,
     profile: state.firebase.profile
 }   
}




export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'alphabets' }
    ])
)(Summary)