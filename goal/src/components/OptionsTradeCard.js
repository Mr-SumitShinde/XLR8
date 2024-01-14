import React, { useState } from "react";
import { Button, Card, Form, Row, Col } from "react-bootstrap";

function OptionsTradeCard(props) {
  const { headerContent, buttonText, onButtonClick } = props;

  // Define state for the radio button
  const [selectedValue, setSelectedValue] = useState(""); // Set the initial value as needed

  // Define the function to handle radio button change
  const onRadioChange = (e) => {
    setSelectedValue(e.target.value);
    // You can perform additional actions based on the selected value if needed
  };

  return (
    <Card>
      <Card.Header as="h3">{headerContent}</Card.Header>
      <Card.Body >
        <Form>
          <container>
            <Row className="justify-content-md-center">
              <Col sm={4}>
                <Form.Check
                  type="radio"
                  label="CE (UP)"
                  value="CE"
                  checked={selectedValue === "CE"}
                  onChange={onRadioChange}
                />
              </Col>
              <Col sm={5}>
                <Form.Check
                  type="radio"
                  label="PE (Down)"
                  value="PE"
                  checked={selectedValue === "PE"}
                  onChange={onRadioChange}
                />
              </Col>
            </Row>
          </container>
        </Form>
        <Button className="mt-3" variant="primary" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default OptionsTradeCard;
