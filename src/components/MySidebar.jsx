import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaHouse } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";

const MySidebar = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Navbar className="navbar navbar-expand-md fixed-left flex-column justify-content-between" id="sidebar">
            <Container className="flex-column align-items-start">
              <Navbar.Brand href="#home">
                <img src="/assets/logo.png" alt="Spotify Logo" width="131" height="40" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto d-flex flex-column">
                  <Nav.Link href="#home" className="nav-item nav-link d-flex align-items-center my-1">
                    <FaHouse className="bi bi-house-door-fill fs-4" />
                    &nbsp; Home
                  </Nav.Link>
                  <Nav.Link href="#home" className="nav-item nav-link d-flex align-items-center">
                    <FaBookOpen className="bi bi-house-door-fill fs-4" />
                    &nbsp; Your Library
                  </Nav.Link>
                  <Nav.Link href="#home" className="nav-item nav-link d-flex align-items-center">
                    <Form className="input-group mt-3">
                      <Form.Control type="text" className="form-control" placeholder="Search" id="searchField" />
                      <div className="input-group-append">
                        <Button type="submit" className="btn btn-outline-secondary btn-sm h-100" variant="black">
                          GO
                        </Button>
                      </div>
                    </Form>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
            <div className="nav-btn">
              <Button type="button" className="btn signup-btn">
                Sign Up
              </Button>
              <Button type="button" className="btn login-btn">
                Login
              </Button>
              <div>
                <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
              </div>
            </div>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default MySidebar;
