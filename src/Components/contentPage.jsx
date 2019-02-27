import React, { Component } from 'react';

class ContentPage extends Component {
  
  
onClickButton = () => {
  const input = <input type="text"/>
  return input;
}
  handleLabel= ()=>{
    const count = 0
    const labelHead = <thead> <tr> <th>Name</th> <th>Place</th> <th>Animal</th> <th>School</th> </tr></thead>
    const labelBody =  <tbody> <tr>  <span> <td> <input name = 'input1'></input></td></span> <span> <td><input></input> </td></span> <span> <td><input></input></td></span> <span> <td><input></input></td></span> </tr> </tbody>
    const labels = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const labelAssigned =  labels.map( label => <div> <button className='.btn.btn-primary' onClick={this.onClickButton} key = {label+1} >{label} </button> {labelBody} </div>);
    return labelAssigned
  }

  
  render() {
    return (
      <div>
      {this.handleLabel()}
      </div>
    );
  }
}

export default ContentPage;
