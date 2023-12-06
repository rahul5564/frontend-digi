
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { CartContext } from './cart/Cartprovider';
import "./style.css";


const Data = ({ }) => {
  const {addId , FetchData} = useContext(CartContext);
  const [comments, setComments] = useState([]);
  const [data,setData] = useState([])
  const navigate = useNavigate();

  const handleEditClick = (commentId) => {
        // const response = await axios.put(`http://localhost:8000/Products/${commentId}`);
  };

  const handleDeleteClick = async(commentId) => {
    console.log(commentId,"id")
        try {
            const response = await axios.delete(`http://localhost:8000/Products/${commentId}`);
            console.log(response.data)
            setData(true)
          } catch (error) {
            console.error('Error fetching comments:', error);
          }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/Products/`);
        console.log(response.data,"resppp")
        FetchData(response)
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
}, [data]);

  return (
    <div className='main'>
      <h1 className='head'>Student Portal Details</h1>
      <ul className="comment-list">
        {comments.map(comment => (
          <li key={comment._id} className="comment-item">
            <div className="detail-item">Roll Num: {comment.id}</div>
            <div className="detail-item">name: {comment.name}</div>
            <div className="detail-item">email: {comment.email}</div>
            <div className="detail-item">Body: {comment.body}</div>
            <div className="comment-actions">
            <button
              className="action-button"
              onClick={() => [navigate("/Edit"),addId(comment._id)]}
            >
              Edit
            </button>
            <button
              className="action-button"
              onClick={() => handleDeleteClick(comment._id)}
            >
              Delete
            </button>
            </div>
          </li>
        ))}
      </ul>
      <div className='btn'>
      <button  className="action-button side" onClick={() =>  navigate("/AddData")}>AddData</button>
      </div>
    </div>
  );
};

export default Data;