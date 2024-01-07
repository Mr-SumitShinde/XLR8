import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dataProcessService from './dataProcessService';

function CheckUserDetails() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Fetch user details via API call and update state
    // Replace the API call with your actual API request logic
    const fetchUserDetails = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_SERVER + "/getUserDetails";
        const response = await axios.get(apiUrl);
        setUserDetails(dataProcessService(response));
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []); // Empty dependency array ensures the effect runs only once on component mount
  return userDetails;
}

export default CheckUserDetails;
