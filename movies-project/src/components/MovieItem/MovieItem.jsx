import { Link } from "react-router-dom";
import "./MovieItem.css";

const MovieItem = ({ movies }) => {

  if (!movies) return null;

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    } else {
      return title;
    }
  };

  return (
    <div className="container-movieItem">
      {movies.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`} className="card-movieItem">
          <img src={movie.medium_cover_image} alt={movie.title} className="img-movieCover-movieItem" />
          <h5 className="mt-2">{truncateTitle(movie.title, 20)}</h5>
          <p>Año: {movie.year}</p>
        </Link>
      ))}
    </div>
  );
}

export default MovieItem;