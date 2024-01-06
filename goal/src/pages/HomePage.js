import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button, Container, Row, Col} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // If user details are available, navigate to the personalized dashboard
    if (userDetails) {
      navigate('/dashboard');
    }
  }, [userDetails, navigate]);

  const handleLogin = async () => {
    try {
     // Make API call using the environment variable
     const apiUrl = process.env.REACT_APP_API_SERVER + '/getUserDetails';
     const response = await axios.get(apiUrl);

     if(response.status === 200){
      const { data } = response.data;
      setUserDetails(data);
     }else{
      console.log('Missing User Details:');
     }
    } catch (error) {
      // Handle errors
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <Container> 
      <Row>
        <Col>
          <Button variant="primary" onClick={handleLogin}>
            Login Fyers
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
