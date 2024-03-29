const SingleCard = props => {
  const track = props.title < 10 ? `${props.title}` : `${props.title.substring(0, 10)}...`;
  return (
    <div className="mx-2" style={{ cursor: "pointer" }}>
      <img src={props.img} alt="" className="card-img" />
      <p className="text-white mt-3 text-center">Tracks: {track}</p>
      <p className="text-white mt-3 text-center">Artist: {props.artist}</p>
    </div>
  );
};

export default SingleCard;
