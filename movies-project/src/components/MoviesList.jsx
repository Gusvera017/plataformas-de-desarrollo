
const MoviesList = ({ movies }) => {

  if (!movies) return null;

  return (
    <div className="movies-list d-flex">
      {movies.map(movie => (
        <div key={movie.id} className="m-3">
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
        </div>
      ))}
    </div>
  );
}
export default MoviesList;