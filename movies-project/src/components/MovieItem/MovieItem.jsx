import "./MovieItem.css";

const MovieItem = ({ movies }) => {

  if (!movies) return null;

  return (
    <div className="d-flex flex-wrap justify-content-around" style={{ overflowX: "auto" }}>
      {movies.map(movie => (
        <div key={movie.id} className="m-3" style={{ minWidth: "200px", maxWidth: "200px" }}>
          <img src={movie.medium_cover_image} alt={movie.title} style={{ maxWidth: "100%", height: "auto" }} />
          <h4>{movie.title}</h4>
          <p>{movie.year}</p>
        </div>
      ))}
    </div>
  );
}
export default MovieItem;