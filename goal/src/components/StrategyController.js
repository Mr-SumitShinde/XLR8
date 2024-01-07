// StrategyController.js
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const StrategyController = () => {
  const [strategyStarted, setStrategyStarted] = useState(false);

  const handleStartClick = () => {
    // Make an API call to stop the strategy on the server
    const apiUrl = process.env.REACT_APP_API_SERVER + "/api/start-strategy";
    const requestData = {
        start: true, // Replace with your actual boolean value
      };
    axios.post(apiUrl, requestData) // Replace with your server endpoint
      .then(response => {
        console.log('Strategy started successfully:', response.data);
        setStrategyStarted(true);
      })
      .catch(error => {
        console.error('Error starting strategy:', error);
        // Handle error, show an alert, etc.
      });
  };

  const handleStopClick = () => {
    // Make an API call to stop the strategy on the server
    const apiUrl = process.env.REACT_APP_API_SERVER + "/api/stop-strategy";
    axios.post(apiUrl) // Replace with your server endpoint
      .then(response => {
        console.log('Strategy stopped successfully:', response.data);
        setStrategyStarted(false);
      })
      .catch(error => {
        console.error('Error stopping strategy:', error);
        // Handle error, show an alert, etc.
      });
  };

  return (
    <div className="container mt-4 border ">
      <h3 className="mb-3 py-2">Strategy Controller</h3>
      <div className="mb-3">
        <button
          className="btn mr-2 btn-primary"
          onClick={handleStartClick}
          disabled={strategyStarted}
        >
          Start
        </button>
        
        <button
          className="btn btn-danger"
          onClick={handleStopClick}
          disabled={!strategyStarted}
        >
          Stop
        </button>
      </div>
      
      <div>
        {/* Add your strategy content here */}
        {strategyStarted ? <p>Strategy is running...</p> : <p>Strategy is stopped.</p>}
      </div>
    </div>
  );
};

export default StrategyController;
