import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./form.css"


const AddData = () => {
  const navigate = useNavigate();

  const [studentData, setStudentData] = useState({
    id : '',
    name: '',
    email: '',
    body: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Student Data:', studentData);
    try {
        const response = await axios.post(`http://localhost:8000/Products/post`,studentData);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
  };

  const Home = () => {
    setTimeout(() => {
        navigate('/')
    },1000)
  }



  return (
    <div className="form-container">
      <h2 className='head'>Add Student Data</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name">Roll No:</label>
          <input
            type="number"
            id="id"
            name="id"
            value={studentData.id}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={studentData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={studentData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            name="body"
            value={studentData.body}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className='Add-database' onClick={() => Home()}>Add To Database</button> {}
          <button onClick={() => navigate('/')}>Home</button>
        </div>
      </form>
    </div>
  );
};

export default AddData;
