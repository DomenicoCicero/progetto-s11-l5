import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { addLikedSong, removeLikedSong } from "../redux/actions";

const Player = () => {
  const dispatch = useDispatch();

  const selectedSong = useSelector(state => {
    return state.selectedSong.song;
  });

  const likedSongs = useSelector(state => {
    return state.liked.songs;
  });

  return (
    <Container fluid className="container-fluid fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={2}></Col>
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 align-items-center">
            {selectedSong && (
              <Col xs={6} md={5} style={{ paddingInline: "60px", paddingBlockEnd: "30px" }}>
                <Row>
                  <Col xs={4} className="d-flex align-items-center offset-2">
                    <div>
                      <img
                        src={selectedSong.album.cover_medium}
                        alt=""
                        className="w-100 pb-2"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <p className="text-white mt-3 text-start">
                      {selectedSong.title < 10 ? `${selectedSong.title}` : `${selectedSong.title.substring(0, 10)}...`}
                    </p>
                    <p className="text-white mt-3 text-start pb-2">{selectedSong.artist.name}</p>
                  </Col>
                </Row>
              </Col>
            )}

            {!selectedSong && <Col xs={6} md={5}></Col>}

            <Col xs={6} md={7} className="playerControls" style={{ paddingBlockEnd: "80px" }}>
              <div className="d-flex">
                <a href="#">
                  <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                </a>
                {!likedSongs.includes(selectedSong) && (
                  <CiHeart
                    className="text-white fs-4 mt-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(addLikedSong(selectedSong))}
                  />
                )}

                {likedSongs.includes(selectedSong) && (
                  <IoMdHeart
                    className="text-white fs-4 mt-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(removeLikedSong(selectedSong.id))}
                  />
                )}
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
