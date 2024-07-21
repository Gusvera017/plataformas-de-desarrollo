import { useState, useEffect } from "react";
import LoadingSpinner from "../ReusableComponents/LoadingSpinner";
import "./MoviesList.css";
import MovieItem from "../MovieItem/MovieItem";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const url = "https://yts.mx/api/v2/list_movies.json?page=15&limit=48";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Upsss, algo salió mal al buscar las peliculas");
      }
      const responseJson = await response.json();
      //console.log("Listado de las pelis con su info: ", responseJson);
      setMovies(responseJson.data.movies);
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    isLoading ? (
      <div className='spinner-position'>
          <LoadingSpinner />
        </div>
    ) : (
      <MovieItem movies={movies} />
    )
  )
}

export default MoviesList;