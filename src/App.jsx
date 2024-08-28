import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import AuthHandler from './components/AuthHandler';
import ForgotPassword from './components/ForgotPassword'
import AddWorkout from './components/AddWorkout';

const extractTokenFromURL = () => {
  const fragment = window.location.hash.substring(1);
  const params = new URLSearchParams(fragment);
  return params.get('access_token');
};

function App() {
  const [accessToken, setAccessToken] = useState(extractTokenFromURL());

  return (
    <Router>
      <AuthHandler accessToken={accessToken} />
      <Routes>
        <Route path="/sign-in" element={<SignIn setAccessToken={setAccessToken}/>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/recover-password" element={<ForgotPassword />} />
        <Route path="/add-workout" element={<AddWorkout />} />
        <Route path="/main" element={<Dashboard setAccessToken={setAccessToken} />} />
        <Route path="/" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
