import React from 'react';
import {Container } from "react-bootstrap"
import './Login.css';
import loginService from '../../services/login'
import axios from 'axios';

const AUTH_URL = 
"https://accounts.spotify.com/authorize?client_id=4d2a507251c34ad49ee00dd2a87cf8e1&response_type=code&redirect_uri=http://localhost:5173/callback&scope=playlist-read-private"

export default function Login() {

  // Handle login button click
  const handleClick = () => {
    window.location.href = 'http://localhost:3001/api/login'; // for render
  };

  return (
    <Container className="d-flex justify-content-center align-items-center"
    style={{minHeight: "100vh"}}
    >
  
      <button className='btn btn-primary btn-lg' onClick={handleClick}>Login With Google</button>
   
     
    </Container>
    
  );
};



