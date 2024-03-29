import "./App.css";
import MySidebar from "./components/MySidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./components/Player";
import Main from "./components/Main";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyCarousel from "./components/MyCarousel";

function App() {
  return (
    <div className="App">
      <MySidebar />
      <Main />
      <Player />
      {/* <MyCarousel /> */}
    </div>
  );
}

export default App;
