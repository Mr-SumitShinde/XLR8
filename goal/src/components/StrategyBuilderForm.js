import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

const StrategyBuilderForm = () => {
  const [formData, setFormData] = useState({
    runType: "backtest",
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

  return (
    <Form className="mt-3">
      <Row class="row bg-light border mb-3">
        {/* Section 1 */}
        <Col md={6} sm={12} className="mb-3">
          <Form.Group controlId="formRunType">
            <Form.Label>Run Type</Form.Label>
            <Form.Check
              type="radio"
              label="Live"
              name="runType"
              value="live"
              checked={formData.runType === "live"}
              onChange={handleChange}
              className="mb-2"
            />
            <Form.Check
              type="radio"
              label="Backtest"
              name="runType"
              value="backtest"
              checked={formData.runType === "backtest"}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        {formData.runType === "backtest" && (
          <>
            <Col md={6} sm={12} className="mb-3">
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

            <Col md={6} sm={12} className="mb-3">
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
          </>
        )}

        <Col md={6} sm={12} className="mb-3">
          <Form.Group controlId="formStrategyName">
            <Form.Label>Strategy Name</Form.Label>
            <Form.Control
              type="text"
              name="strategyName"
              value={formData.strategyName}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col md={6} sm={12} className="mb-3">
          <Form.Group controlId="formLabel">
            <Form.Label>Add Label</Form.Label>
            <Form.Control
              type="text"
              name="label"
              value={formData.label}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row class="row bg-light border mb-3">
        <Col md={6} sm={12} className="mb-3">
          <Form.Group controlId="formInstrumentType">
            <Form.Label>Instrument Type</Form.Label>
            <Form.Control
              as="select"
              name="instrumentType"
              value={formData.instrumentType}
              onChange={handleChange}
            >
              <option value="equityIndex">Equity & Index</option>
              <option value="futureOptions">Future & Options</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={6} sm={12} className="mb-3">
          <Form.Group controlId="formInstruments">
            <Form.Label>Instrument</Form.Label>
            <Form.Control
              type="text"
              name="instruments"
              value={formData.instruments}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col md={6} sm={12} className="mb-3">
          <Form.Group controlId="formChartType">
            <Form.Label>Chart Type</Form.Label>
            <Form.Control
              as="select"
              name="chartType"
              value={formData.chartType}
              onChange={handleChange}
            >
              <option value="candle">Candle</option>
              <option value="heikinashi">Heikinashi</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row class="row bg-light border mb-3">
        <Col md={6} sm={12} className="mb-3">
          <Form.Group controlId="formStrategyType">
            <Form.Label>Strategy Type</Form.Label>
            <Form.Control
              as="select"
              name="strategyType"
              value={formData.strategyType}
              onChange={handleChange}
            >
              <option value="intraday">Intraday</option>
              <option value="positional">Positional</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={6} sm={12} className="mb-3">
          <Form.Group controlId="formTradeDuring">
            <Form.Label>Trade During</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Form.Group>
        </Col>

        <Col md={6} sm={12} className="mb-3">
          <Form.Group controlId="formMaxTradesPerDay">
            <Form.Label>Max Trades Per Day</Form.Label>
            <Form.Control
              type="number"
              name="maxTradesPerDay"
              value={formData.maxTradesPerDay}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        {/* Add more fields in Section 3 as needed */}
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default StrategyBuilderForm;
