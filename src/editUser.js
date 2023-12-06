import React, { useState, useEffect ,useContext} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { CartContext } from './cart/Cartprovider'
import "./form.css"


export const Edit = () => {
  const navigate = useNavigate();
  const {Data,CartId} = useContext(CartContext);

  const [studentData, setStudentData] = useState({
    name: '',
    email: '',
    body: ''
  });

  useEffect(() => {
    const selectedData = Data.find((item) => item._id === CartId);

    if (selectedData) {
      setStudentData({
        name: selectedData.name || '',
        email: selectedData.email || '',
        body: selectedData.body || ''
      });
    }
  }, [Data, CartId]);

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
        const response = await axios.put(`http://localhost:8000/Products/${CartId}`,studentData);
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
      <h2 className='head'>Edit Form</h2>
      <form onSubmit={handleSubmit}>
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
          <button type="submit" onClick={() => Home()}>Add To Database</button> {}
          <button onClick={() => navigate('/')}>Home</button>
        </div>
      </form>
    </div>
  );
};




