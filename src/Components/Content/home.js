import React, { Component } from 'react'
import './home.css'
import { connect } from 'react-redux'
import { Button, Collapse, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import { callALetter } from '../../store/Actions/homeActions';
import Toggle from './Toggle'

class Home extends Component {
    state = {
        letter: '',
        name: '',
        animal: '',
        place: '',
        thing: '',
       
    }

    handleDisable = () => {      
      document.getElementById("bbtn").disabled= true
      const form = document.getElementById('myForm')
      const formElements = form.elements
      const len = formElements.length;
      for (let i = 0; i < len; ++i) {
        formElements[i].disabled=true;
      }
    }
    handleOnChange = (event) => {
        event.preventDefault(); 
        this.setState({ [event.target.id] : event.target.value})
        console.log(this.state)
    }

    handleOnClick = (id) => {
      this.setState({letter: id})
      console.log(id)
      // this.handleTime()
      // this.handleDisable()
    }

    // handleTime = () => {
    //   let setMins = 1
    //   let setSec = 5     
    //     const timer = () => {
    //       let time = `${setMins} : ${setSec}`;
    //       if(setSec > 0){
    //           setSec -= 1
    //         }
    //         else if(setSec === 0 && setMins > 0){
    //           setMins -= 1
    //           setSec = 5
    //       }
    //       else if (setMins === 0 && setMins === 0){
    //        return time = `Time Up!`
    //        }
          
    //     document.getElementById('time').innerHTML = time
    //     }
      
    //   let setTimer =  setInterval(timer, 1000)
    //   setInterval(timer, 1000)
    //   clearInterval(setTimer)
    // }
    // handleSub = (event) => {
    //   event.preventDefault()
      
    // }
    handleSubmit = (event) => {
      console.log(this.state)
      this.props.callALetter(this.state)
      this.handleDisable()
      return <Redirect to="/summary" />
    }


  render(props) {
    const { open } = this.state;
    const { callALetter, auth } = this.props
    const handleOnClick = this.handleOnClick
    const { alphabets } = this.props
    if(!auth.uid) return <Redirect to="/signin" />
    return (
      <div className="container">
      
      <h3 id="time">Time</h3>
       <Toggle render = {({ on, toggle }) => (
         <div>
        {on && <form id="myForm"><div className="input-group" id="tog">
        <input type="text" id="name" className="form-control" onChange={this.handleOnChange} placeholder="Name"/>
        <input type="text" id="animal" className="form-control" onChange={this.handleOnChange}  placeholder="Animal"/>
        <input type="text" id="place" className="form-control" onChange={this.handleOnChange} placeholder="Place"/>
        <input type="text" id="thing" className="form-control" onChange={this.handleOnChange} placeholder="Things"/>
        <input type="button" id="bbtn" className="form-control btn btn-success" onClick={this.handleSubmit} value="Submit" />
        </div></form>}
        {alphabets && alphabets.map((alphabet, i) => <span key={i+1}>
        <Button id={alphabet} className={i+1} onClick={(e)=>{
          e.preventDefault()
          toggle();
         this.handleOnClick(e.target.id)}
         }>{alphabet}</Button></span> )}
       </div>
       )} />
        
       
       <div id="demo"></div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    alphabets: state.home.alphabets,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    callALetter: (letter) => dispatch(callALetter(letter))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
