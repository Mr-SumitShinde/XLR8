import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
import Dashboard from './pages/Dashboard';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import dataProcessService from './services/dataProcessService';

const Root = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Fetch user details via API call and update state
    // Replace the API call with your actual API request logic
    const fetchUserDetails = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_SERVER + '/getUserDetails';
        const response = await axios.get(apiUrl);
        setUserDetails(dataProcessService(response));
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<App />}
          />
          <Route
            path="/dashboard"
            element={userDetails ? <Dashboard userDetails={userDetails}/> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

reportWebVitals();
