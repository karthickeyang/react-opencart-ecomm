import React, { Component } from 'react';

const TableBody = props => {
  const rows = props.employeeDetails.map((row,index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>{row.email}</td>
        <td><button className="btn btn-success" onClick ={ () => {props.removeCharacter(index)} }>Delete</button></td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

export default class Table extends Component {
  render() {
    const { employeeDetails, removeCharacter } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
          <TableBody 
          employeeDetails={employeeDetails}
          removeCharacter= {removeCharacter}
          />
      </table>
    );
  }
}
