import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../ReusableComponents/LoadingSpinner';
import { Button } from 'react-bootstrap';
import "./MovieDetail.css"

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //console.log("El id de la pelicula elegida es: ", id);
    const fetchMovie = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        if (!response.ok) {
          throw new Error('Upsss, no se encontró la pelicula');
        }
        const data = await response.json();
        setMovie(data.data.movie);
      } catch (error) {
        console.error('Error: ', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (isLoading) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <div className='container-detail'>
      <div className='card-container-detail'>
        <div className='row'>
          <img className='img-property-detail' src={movie.medium_cover_image} alt={movie.title} />
        </div>
        <div className='col card-container-data'>
          
          <h2>{movie.title}</h2>
          <p>Año: {movie.year}</p>
          <p>Genero/s: {movie.genres.join(" / ")}</p>
          <p>Descripción: {movie.description_full}</p>
          <div className='container-btn-agregar'>
            <Button>Agregar +</Button>
          </div>

        </div>
      </div>

      <div className='container-trailer-iframes'>
        {movie.yt_trailer_code ? (
          <iframe
            title="trailer"
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
            allowFullScreen
          ></iframe>
        ) : <div className='message-trailer-404'>TRAILER NO DISPONIBLE</div>
        
        }
      </div>
    </div>
  );
}

export default MovieDetail;
