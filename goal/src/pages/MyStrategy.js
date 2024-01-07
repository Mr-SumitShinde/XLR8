import React from "react";
import AppNavbar from "../components/Navbar";
import CustomCard from "../components/CustomCard";
import { Container, Row, Col } from "react-bootstrap";
import StrategyController from "../components/StrategyController";

function MyStrategy() {
  const handleButtonClick = () => {
    // Add your button click logic here
    console.log("Button Clicked!");
  };

  return (
    <div className="App">
      <AppNavbar />
      <Container>
        <Row>
          <Col>
            <CustomCard
              headerContent="PE buying"
              content="This is the card content. You can put any information here."
              buttonText="Deploy"
              onButtonClick={handleButtonClick}
            />
          </Col>
          <Col>
            <CustomCard
              headerContent='CE buying'
              content="This is the card content. You can put any information here."
              buttonText="Deploy"
              onButtonClick={handleButtonClick}
            />
          </Col>
          <Col>
            <CustomCard
              headerContent="selling Options"
              content="This is the card content. You can put any information here."
              buttonText="Deploy"
              onButtonClick={handleButtonClick}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <StrategyController/>
        </Row>
      </Container>
    </div>
  );
}

export default MyStrategy;
