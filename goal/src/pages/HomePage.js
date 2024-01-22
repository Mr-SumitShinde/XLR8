import React, { useEffect } from 'react';
import axios from 'axios';
import {Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../components/Navbar';
import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { setUser, isLoggedIn, setIsloggedIn } = useAuth();

  const login = (data) => {
    setIsloggedIn(true);
    setUser(data);
  };

  const loggedOut = (e) => {
    e.preventDefault();
    setIsloggedIn(false);
    setUser(null);
  };

  const navigate = useNavigate();

  useEffect(() => {
    // If user details are available, navigate to the personalized dashboard
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = async () => {
    try {
     const apiUrl = process.env.REACT_APP_API_SERVER + '/getUserDetails';
     const response = await axios.get(apiUrl);

     if(response.status === 200){
      login(response.data)
     }else{
      loggedOut();
      console.log('Missing User Details:');
     }
    } catch (error) {
      // Handle errors
      loggedOut();
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <div>
      <AppNavbar/>
      <Container> 
      <Row>
        <Col>
          <Button variant="primary" onClick={handleLogin}>
            Login Fyers
          </Button>
        </Col>
      </Row>
    </Container>
    </div>

  );
}

export default HomePage;
