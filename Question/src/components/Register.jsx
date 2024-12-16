import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ addEmployee }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
      const newEmployee = { id: Date.now(), ...formData };
      addEmployee(newEmployee);
      setMessage('Registration successful!');
      setFormData({ name: '', email: '' });
    } catch (error) {
      console.error('Error during registration:', error);
      setMessage('Registration failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Register Form</h2>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  );
};

export default Register;
