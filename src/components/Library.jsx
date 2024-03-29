import MySidebar from "./MySidebar";
import Player from "./Player";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import SingleCard from "./SingleCard";
import {
  removeFromPlaylistHiphop,
  removeFromPlaylistPop,
  removeFromPlaylistRook,
  removeLikedSong,
  setSelectedSong,
} from "../redux/actions";

const Library = () => {
  const dispatch = useDispatch();
  const likesPlaylist = useSelector(state => {
    return state.liked.songs;
  });

  const rookPlaylist = useSelector(state => {
    return state.playlist.rookList;
  });

  const popPlaylist = useSelector(state => {
    return state.playlist.popList;
  });

  const hiphopPlaylist = useSelector(state => {
    return state.playlist.hiphopList;
  });
  return (
    <>
      <MySidebar />
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

          {likesPlaylist.length !== 0 && (
            <Row>
              <Col xs={10}>
                <div id="searchResults">
                  <h2>Mi Piace</h2>
                  <Row>
                    {likesPlaylist.map(element => {
                      return (
                        <Col xs={3} key={element.id}>
                          <div onClick={() => dispatch(setSelectedSong(element))}>
                            <SingleCard
                              img={element.album.cover_medium}
                              title={element.album.title}
                              artist={element.artist.name}
                            />
                            <Button
                              type="button"
                              variant="danger"
                              className="mb-2"
                              onClick={() => dispatch(removeLikedSong(element.id))}
                            >
                              Rimuovi da playlist
                            </Button>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Col>
            </Row>
          )}

          {rookPlaylist.length !== 0 && (
            <Row>
              <Col xs={10}>
                <div id="rock">
                  <h2>Rock PlayList</h2>
                  <Row>
                    {rookPlaylist.map(element => {
                      return (
                        <Col xs={3} key={element.id}>
                          <div onClick={() => dispatch(setSelectedSong(element))}>
                            <SingleCard
                              img={element.album.cover_medium}
                              title={element.album.title}
                              artist={element.artist.name}
                            />
                            <Button
                              type="button"
                              variant="danger"
                              className="mb-2"
                              onClick={() => dispatch(removeFromPlaylistRook(element.id))}
                            >
                              Rimuovi da playlist
                            </Button>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Col>
            </Row>
          )}

          {popPlaylist.length !== 0 && (
            <Row>
              <Col xs={10}>
                <div id="pop">
                  <h2>Pop PlayList</h2>
                  <Row>
                    {popPlaylist.map(element => {
                      return (
                        <Col xs={3} key={element.id}>
                          <div onClick={() => dispatch(setSelectedSong(element))}>
                            <SingleCard
                              img={element.album.cover_medium}
                              title={element.album.title}
                              artist={element.artist.name}
                            />
                            <Button
                              type="button"
                              variant="danger"
                              className="mb-2"
                              onClick={() => dispatch(removeFromPlaylistPop(element.id))}
                            >
                              Rimuovi da playlist
                            </Button>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Col>
            </Row>
          )}

          {hiphopPlaylist.length !== 0 && (
            <Row>
              <Col xs={10}>
                <div id="hiphop">
                  <h2>#HipHop PlayList</h2>
                  <Row>
                    {hiphopPlaylist.map(element => {
                      return (
                        <Col xs={3} key={element.id}>
                          <div onClick={() => dispatch(setSelectedSong(element))}>
                            <SingleCard
                              img={element.album.cover_medium}
                              title={element.album.title}
                              artist={element.artist.name}
                            />
                            <Button
                              type="button"
                              variant="danger"
                              className="mb-2"
                              onClick={() => dispatch(removeFromPlaylistHiphop(element.id))}
                            >
                              Rimuovi da playlist
                            </Button>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Col>
            </Row>
          )}
        </Col>
      </Container>
      <Player />
    </>
  );
};

export default Library;
