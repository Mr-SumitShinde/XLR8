import React from "react";
import AppNavbar from "../components/Navbar";
import OptionsTradeCard from "../components/OptionsTradeCard";
import {Container, Row, Col} from "react-bootstrap";
import UserInfoCard from "../components/UserInfoCard";

function Dashboard(userDetails) {

  const userInfo = userDetails.userDetails;
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
  const user = {
    name: userInfo.name,
    fund: '$100,000',
  };

  return (
    <div className="App">
      {console.log(userInfo)}
      <AppNavbar />
      <Container fluid="md" gap={2}>
      <Row className="mb-3">
        <Col className="">
          <UserInfoCard {...user} />
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
