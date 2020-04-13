import React, { Component } from 'react';
import NavBar from './NavBar';



class Home extends Component {
  render() { 
    const employee = this.props.data.data;
    console.log('employee',employee);
    return ( 
      <div>
       <NavBar />
       <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        {employee.map(({ id, employee_name, employee_salary, employee_age }) => (
          <li key={id} style={{margin: 30}}>
            <ul>
              <li>Name: {employee_name}</li>
              <li>Salary: {employee_salary}</li>
              <li>Age: {employee_age}</li>
            </ul>
          </li>
        ))}
      </ul>
     </div>
     );
  }
}
 
export default Home;
// export default function Home () {
//   return (
//     <div>
//       <NavBar />
//       Select a Language
//     </div>
//   )
// }