import React, { useState } from "react";
import { Form, Col, Row, Button, Container, Stack } from "react-bootstrap";

const StrategyBuilderForm = () => {
  const [formData, setFormData] = useState({
    runType: "backtest",
    liveRunMoneyType: "",
    startDate: "",
    endDate: "",
    strategyName: "",
    label: "",
    instrumentType: "equityIndex",
    instruments: [],
    chartType: "candle",
    strategyType: "intraday",
    startTime: "",
    endTime: "",
    maxTradesPerDay: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Row className="d-flex flex-column border border-primary-subtle mb-3 p-2 rounded-3 ">
          <Stack direction='horizontal' gap={3}>
            <Col className="border  bg-primary-subtle p-2 ">
              <Form.Group controlId="formRunType">
                <Form.Label>Run Type</Form.Label>
                <Row>
                  <Col>
                    <Form.Check
                      type="radio"
                      label="Live"
                      name="runType"
                      value="live"
                      checked={formData.runType === "live"}
                      onChange={handleChange}
                      className="mb-2"
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      type="radio"
                      label="Backtest"
                      name="runType"
                      value="backtest"
                      checked={formData.runType === "backtest"}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col className="border bg-primary-subtle p-2">
              {formData.runType === "backtest" && (
                <Stack direction='horizontal' gap={3}>
                    <Col>
                      <Form.Group controlId="formStartDate">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleChange}
                          className="form-control" // Bootstrap form control class
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group controlId="formEndDate">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  
                </Stack>
              )}
              {formData.runType === "live" && (
                <Col>
                  <Form.Group controlId="formLiveMoneyType">
                    <Form.Label>Money Type</Form.Label>
                    <Row>
                      <Col>
                        <Form.Check
                          type="radio"
                          label="Virtual"
                          name="liveRunMoneyType"
                          value="virtual"
                          checked={formData.liveRunMoneyType === "virtual"}
                          onChange={handleChange}
                          className="mb-2"
                        />
                      </Col>
                      <Col>
                        <Form.Check
                          type="radio"
                          label="Real"
                          name="liveRunMoneyType"
                          value="real"
                          checked={formData.liveRunMoneyType === "real"}
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                </Col>
              )}
            </Col>
            <Col className="border bg-primary-subtle p-2">
              <Row>
                <Form.Group controlId="formStrategyName">
                  <Form.Label className="text-left">Strategy Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="strategyName"
                    value={formData.strategyName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
            </Col>
            <Col className="border bg-primary-subtle p-2">
              <Row>
                <Form.Group controlId="formLabel">
                  <Form.Label>Add Label</Form.Label>
                  <Form.Control
                    type="text"
                    name="label"
                    value={formData.label}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
            </Col>
          </Stack>
        </Row>
        <Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Row>
      </Container>
    </Form>
  );
};

export default StrategyBuilderForm;
