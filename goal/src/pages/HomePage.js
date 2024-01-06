import React, { useState } from 'react';
import axios from 'axios';
import {Button, Container, Row, Col} from "react-bootstrap";

function HomePage() {
  const [userDetails, setUserDetails] = useState(null);

  const handleLogin = async () => {
    try {
     // Make API call using the environment variable
     const apiUrl = process.env.REACT_APP_API_SERVER + '/authenticate';
     console.log(apiUrl)
     const response = await axios.get(apiUrl);
     if(response.code === 200){
      const { data } = response.data;
      setUserDetails(data);
      console.log('User Details:', userDetails);
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
