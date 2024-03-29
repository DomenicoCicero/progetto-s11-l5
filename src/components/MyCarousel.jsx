import Slider from "react-slick";
import SingleCard from "./SingleCard";
import { useDispatch } from "react-redux";
import { setSelectedSong } from "../redux/actions";

const MyCarousel = props => {
  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {props.genre.map(song => {
          return (
            <div key={song.id} className="mx-2" onClick={() => dispatch(setSelectedSong(song))}>
              <SingleCard img={song.album.cover_medium} title={song.album.title} artist={song.artist.name} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MyCarousel;
