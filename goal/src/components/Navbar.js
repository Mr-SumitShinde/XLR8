import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext'; 

function AppNavbar() {
  const { isLoggedIn } = useAuth();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    if(isLoggedIn){
      navigate("/dashboard");
    }else{
      navigate("/");
    }
    
  };

  const navigateToStrategies = () => {
    if(isLoggedIn){
      navigate("/my-strategies");
    }else{
      navigate("/");
    }
  };

  const navigateToCreateStrategies = () => {
    // Add logic for creating strategies
    // For example, you might want to redirect to a different page for creating strategies.
    navigate("/create-strategy");
  };
  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary border mb-3 ${
        showOffcanvas ? "position-fixed w-100" : ""
      }`}
    >
      <Container fluid>
        <Navbar.Brand href="/">XLR8</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setShowOffcanvas(!showOffcanvas)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          {showOffcanvas ? null : (
            <Nav className="me-auto">
              <Nav.Link onClick={navigateToDashboard}>Dashboard</Nav.Link>
              <Nav.Link onClick={navigateToStrategies}>My Strategies</Nav.Link>
              <Nav.Link onClick={navigateToCreateStrategies}>
                Create Strategy
              </Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
          <Form className={`d-flex ${showOffcanvas ? "d-none" : ""}`}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>

      {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => (
        <Offcanvas
          key={expand}
          show={showOffcanvas && expand === false}
          onHide={() => setShowOffcanvas(false)}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      ))}
    </Navbar>
  );
}

export default AppNavbar;
