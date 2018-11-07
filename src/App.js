import React, { Component } from 'react';
import  Table  from './Table';
import  Form  from './Form';
import  Api  from './Api';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  state  = {
    employeeDetails: [
    ]
  };

  removeCharacter = index => {

    const { employeeDetails } = this.state;

    this.setState({
      employeeDetails: employeeDetails.filter((employeeDetail,i) => {
        return i != index;
      })
    })

  }

 

  handleSubmit = employeedetail => {
    this.setState({
      employeeDetails: [...this.state.employeeDetails,employeedetail]
    })
  };
  render() {

    const { employeeDetails } = this.state;

    
    return (
      <div className="App">
      <div className="container">
      <Table 
        employeeDetails={employeeDetails}
        removeCharacter={this.removeCharacter}
      />
      <Form handleSubmit={this.handleSubmit} />

      <Api />
      </div>
      
      </div>
    );
  }
}

export default App;
