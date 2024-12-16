import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Register from './components/Register';
import Employee from './components/Employee';


const App = () => {
  const [employees, setEmployees] = useState([]);


  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchEmployees();
  }, []);


  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  return (
    <div>
      <h1>Employee Management</h1>
      <Register addEmployee={addEmployee} />
      <Employee employees={employees} />
    </div>
  );
};

export default App;
