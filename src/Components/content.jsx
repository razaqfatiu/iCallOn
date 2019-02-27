import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      alphabets: [
        { id: 1, value: "A"},
        { id: 2, value: "B"},
        { id: 3, value: "C"}
      ],
      others: { 
        input1 : <div><span>  <input type="text" onChange={this.updateInput} /> </span></div>,
        checkYes: <span> <input type="checkbox" name="" ref='' onClick={this.handleCheck} />Correct</span>,
        checkNo: <span> <input type="checkbox" name='' ref='' onClick={this.handleCheck2} />Wrong</span>
      }, 
      score: {
        score: 0
      }
    };
  }
  updateInput = (e) => {
    console.log("updated " + e.target.value)
  }

  handleCheck = () =>{
    if(this.state.others.checkYes.checked == true){
    return this.state.others.checkNo.checked == false
  }
     const score =  this.setState({score : 50})
       return score

  }
  handleCheck2 = () => {
    if(this.state.others.checkNo.checked == true){
     return this.state.others.checkYes.checked == false}
    const score =  this.setState({score: 0})
       return score
  }

  handleButton = () => {
    const alphabets = <div> <span> <button> {this.state.alphabets[1].value} </button> </span> {this.state.others.input1}
    {this.state.others.checkYes} {this.state.others.checkNo}
    </div>
    return alphabets
  } 
  

  render() {
    console.log(this.state.others.input1)
    return (
      <div>
        
        {this.handleButton()}
      </div>
    );
  }
}

export default Content;
