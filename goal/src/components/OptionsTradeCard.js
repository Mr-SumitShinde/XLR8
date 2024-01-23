import React, { useState } from "react";
import axios from 'axios';
import {
  Button,
  Card,
  Form,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Container
} from "react-bootstrap";

function OptionsTradeCard(props) {
  const buttonText = "Take Trade"
  const { headerContent, indexCode } = props;
  const [isLoading, setIsLoading] = useState(false);
  // Define state for the radio button
  const [selectedValue, setSelectedValue] = useState(""); // Set the initial value as needed

  // Define the function to handle radio button change
  const onRadioChange = (e) => {
    setSelectedValue(e.target.value);
    // You can perform additional actions based on the selected value if needed
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Please select a radio button first.
    </Tooltip>
  );

  const onButtonClick = () => {
    if (selectedValue) {
      setIsLoading(true);

      const apiUrl = process.env.REACT_APP_API_SERVER + "/api/trade-option";
      const requestData = {
        selectedValue: selectedValue,
        index: indexCode, // Replace with your actual boolean value
        };

      // Perform API call using Axios
      axios
        .post(apiUrl, requestData)
        .then((response) => {
          console.log("API Response:", response.data);
          setIsLoading(false);
          // Handle success or error as needed
        })
        .catch((error) => {
          console.error("API Error:", error);
          setIsLoading(false);
          // Handle error
        });
    }
  };

  return (
    <Card>
      <Card.Header as="h3">{headerContent}</Card.Header>
      <Card.Body>
        <Form>
          <Container>
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
          </Container>
        </Form>
        {isLoading ? (
          <Button className="mt-3" variant="primary" disabled>
            Loading...
          </Button>
        ) : selectedValue ? (
          <Button className="mt-3" variant="primary" onClick={onButtonClick}>
            {buttonText}
          </Button>
        ) : (
          <OverlayTrigger placement="right" overlay={renderTooltip}>
            <span>
              <Button
                className="mt-3"
                variant="primary"
                onClick={onButtonClick}
                disabled={!selectedValue}
              >
                {buttonText}
              </Button>
            </span>
          </OverlayTrigger>
        )}
      </Card.Body>
    </Card>
  );
}

export default OptionsTradeCard;
