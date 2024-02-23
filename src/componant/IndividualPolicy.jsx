// AddFamilyMember.js

import React, { useState } from 'react';
import axios from 'axios';
import './IndividualPolicy.css';

const IndividualPolicy = () => {
  const [fullName, setFullName] = useState('');
  const [mobileNo,setMobileno] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    if (!fullName || !dateOfBirth || !mobileNo || !gender || !occupation) {
      alert('Please fill out all required fields.');
      return;
    }

    // Send POST request to create new family member
    try {
      const response = await axios.post('http://localhost:9999/individual-api', {
        fullName,
        mobileNo,
        dateOfBirth,
        gender,
        occupation,
      });
      alert('Family member added successfully.');
      // Clear form fields
      setFullName('');
      setMobileno('');
      setDateOfBirth('');
      setGender('');
      setOccupation('');
    } catch (error) {
      console.error('Error adding family member:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='form-container'>
      <h2>Add Individual details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input
           type="text" id="phone" name="phone"
            className="form-control"
            value={mobileNo}
            onChange={(e) => setMobileno(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            className="form-control"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Occupation</label>
          <select
            className="form-control"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            required
          >
            <option value="">Select occupation</option>
            <option value="Student">Student</option>
            <option value="Employee">Employee</option>
            <option value="Other">Other</option>
            <option value=""></option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Add Family Member</button>
      </form>
    </div>
  );
};

export default IndividualPolicy;
