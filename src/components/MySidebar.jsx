import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaHouse } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_SEARCH,
  addToPlaylistHiphop,
  addToPlaylistPop,
  addToPlaylistRook,
  getFetch,
  setSearch,
} from "../redux/actions";
import { RiPlayListAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const MySidebar = () => {
  const dispatch = useDispatch();

  const selectedSong = useSelector(state => {
    return state.selectedSong.song;
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getFetch(e.target.elements.song.value, GET_SEARCH));
    dispatch(setSearch(e.target.elements.song.value));
  };

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
                  <Link to={"/"} className="nav-item nav-link d-flex align-items-center my-1">
                    <FaHouse className="bi bi-house-door-fill fs-4" />
                    &nbsp; Home
                  </Link>
                  <Link to={"/library"} className="nav-item nav-link d-flex align-items-center">
                    <FaBookOpen className="bi bi-house-door-fill fs-4" />
                    &nbsp; Your Library
                  </Link>
                  <Nav.Link href="#home" className="nav-item nav-link d-flex align-items-center">
                    <Form className="input-group mt-3" onSubmit={handleSubmit}>
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        id="searchField"
                        name="song"
                      />
                      <div className="input-group-append">
                        <Button type="submit" className="btn btn-outline-secondary btn-sm h-100" variant="black">
                          GO
                        </Button>
                      </div>
                    </Form>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Dropdown as={ButtonGroup}>
                <Button variant="black" className="text-secondary">
                  <RiPlayListAddFill className="me-2" />
                  Add to PlayList
                </Button>

                <Dropdown.Toggle split variant="black" id="dropdown-split-basic" className="text-secondary" />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" onClick={() => dispatch(addToPlaylistRook(selectedSong))}>
                    Rook
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={() => dispatch(addToPlaylistPop(selectedSong))}>
                    Pop
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" onClick={() => dispatch(addToPlaylistHiphop(selectedSong))}>
                    Hiphop
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
