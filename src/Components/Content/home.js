import React, { Component } from 'react'
import './home.css'
import { connect } from 'react-redux'
import { Button, Collapse, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import { callALetter } from '../../store/Actions/homeActions';
// import { Fields, handleDisable } from './input'

class Home extends Component {
    state = {
        name: '',
        animal: '',
        place: '',
        thing: '',
       
    }

    handleDisable = () => {
      // ReactDOM.render(Form, document.getElementById("tog").disabled = true)
    }
    handleOnChange = (event) => {
        this.setState({ [event.target.id] : event.target.value})
        console.log(this.state)
    }

    // handleOnClick = () => {
      // this.setState({open: !open})
      // this.handleTime()
      // this.handleDisable()
    // }

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
    handleSub = (event) => {
      event.preventDefault()
      this.props.callALetter(this.state)
    }


  render(props) {
    const { open } = this.state;
    // const { callALetter } = this.props
    //const alphabets = this.props.alphabets
    // if(!auth.uid) return <Redirect to="signin" />
    return (
      <div className="container">
      <h3 id="time">Time</h3>
       {/* {alphabets && alphabets.map((alphabet, index) => <span key={index+1}> <Button  onClick={() =>{this.handleOnClick() ;this.setState({ open: true })}} aria-controls="tog" aria-expanded = {open}>{alphabet}</Button></span> )} */}
       <Button onClick={() =>this.setState({ open: !open })} aria-controls="tog" aria-expanded = {open} id="alph">A</Button>
       <Form>
        <Collapse in={this.state.open}>
        <div className="input-group collapse" id="tog">
        <input type="text" id="name" className="form-control" onChange={this.handleOnChange} placeholder="Person's Name"/>
        <input type="text" id="animal" className="form-control" onChange={this.handleOnChange}  placeholder="Animal"/>
        <input type="text" id="place" className="form-control" onChange={this.handleOnChange} placeholder="Place"/>
        <input type="text" id="thing" className="form-control" onChange={this.handleOnChange} placeholder="Things"/>
        <Button onClick={this.handleSub}>submit</Button>
        </div>
       </Collapse>
       </Form>
       <div id="demo"></div>
      </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     alphabets: state.home.alphabets,
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    callALetter: (letter) => dispatch(callALetter(letter))
  }
}


export default connect(null, mapDispatchToProps)(Home)
