import React from "react";
import AppNavbar from "../components/Navbar";
import OptionsTradeCard from "../components/OptionsTradeCard";
import {Container, Row, Col} from "react-bootstrap";
import UserInfoCard from "../components/UserInfoCard";
import { useAuth } from "../context/AuthContext";
import dataProcessService from "../services/dataProcessService";

function Dashboard() {
  const { user } = useAuth();

  const userInfo = dataProcessService(user);
  const bankNiftyProps = {
    headerContent: "Bank Nifty",
    indexCode:"NSE:NIFTYBANK-INDEX",
  };

  const niftyProps = {
    headerContent: "Nifty",
    indexCode:"NSE:NIFTY50-INDEX",
  };

  const finNiftyProps = {
    headerContent: "Fin Nifty",
    indexCode:"NSE:FINNIFTY-INDEX",
  };
  const userData = {
    name: userInfo.name,
    fund: userInfo.funds
  };

  return (
    <div className="App">
      <AppNavbar />
      <Container fluid="md" gap={2}>
      <Row className="mb-3">
        <Col className="">
          <UserInfoCard {...userData} />
        </Col>
      </Row>
      <Row>
        <Col sm={4}> <OptionsTradeCard {...bankNiftyProps} /> </Col>
        <Col sm={4}> <OptionsTradeCard {...niftyProps} /> </Col>
        <Col sm={4}> <OptionsTradeCard {...finNiftyProps} /> </Col>
      </Row>
     
      </Container>
      
    </div>
  );
}

export default Dashboard;
