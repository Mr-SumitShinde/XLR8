import React from "react";
import AppNavbar from "../components/Navbar";
import { Container, Row } from "react-bootstrap";
import StrategyBuilderForm from "../components/StrategyBuilderForm";

function Dashboard(userDetails) {
  const user = userDetails.userDetails;
  const handleButtonClick = () => {
    // Add your button click logic here
    console.log("Button Clicked!",user);
  };

  return (
    <div className="App">
      <AppNavbar />
      <Container>
        <Row>
        <StrategyBuilderForm/>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
