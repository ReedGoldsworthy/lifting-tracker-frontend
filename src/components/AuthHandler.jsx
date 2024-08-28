import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthHandler = ({ accessToken }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      console.log('Access Token:', accessToken);

      // Send access token to backend using axios
      axios.post('http://localhost:3001/api/data/workouts', { accessToken })
        .then(response => {
          console.log('User Info:', response.data);
          // Navigate to Dashboard if the accessToken is valid
          navigate('/main');
        })
        .catch(error => {
          console.error('Error fetching user info:', error);
        });
    } else {
       
    }
  }, [accessToken, navigate]);

  return null;
};

export default AuthHandler;
