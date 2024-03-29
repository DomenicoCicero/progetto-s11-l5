import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCarousel from "./MyCarousel";
import { GET_HIPHOP, GET_POP, GET_ROOK, getFetch } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Main = () => {
  const dispatch = useDispatch();

  const songsRook = useSelector(state => {
    return state.rook.content;
  });

  const songsPop = useSelector(state => {
    return state.pop.content;
  });

  const songsHiphop = useSelector(state => {
    return state.hiphop.content;
  });

  useEffect(() => {
    dispatch(getFetch("queen", GET_ROOK));
    dispatch(getFetch("Katy Perry", GET_POP));
    dispatch(getFetch("Eminem", GET_HIPHOP));
  }, []);

  return (
    <Container fluid className="p-200">
      <Col md={9} className="offset-md-3 mainPage">
        <Row>
          <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="searchResults" style={{ display: "none" }}>
              <h2>Search Results</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="rock">
              <h2>Rock Classics</h2>
              <MyCarousel genre={songsRook} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="pop">
              <h2>Pop Culture</h2>
              <MyCarousel genre={songsPop} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="hiphop">
              <h2>#HipHop</h2>
              <MyCarousel genre={songsHiphop} />
            </div>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Main;
