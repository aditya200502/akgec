import React from 'react';

const Employee = ({ employees }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <div className="grid-container">
        {employees.map((emp) => (
          <div key={emp.id} className="grid-item">
            <h3>{emp.name}</h3>
            <p>Email: {emp.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employee;
