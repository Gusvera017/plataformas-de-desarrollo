import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../ReusableComponents/LoadingSpinner';
import { Button } from 'react-bootstrap';
import "./MovieDetail.css"

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getMovie = async () => {
    setIsLoading(true);
    const urlWithId = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
    try {
      const response = await fetch(urlWithId);
      if (!response.ok) {
        throw new Error('Upsss, no se encontró la pelicula');
      }
      const responseJson = await response.json();
      //console.log("La pelicula es: ", responseJson);
      setMovie(responseJson.data.movie);
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id])

  if (isLoading) {
    return (
      <LoadingSpinner />
    );
  }

  //Función para descargar el torrent de la peli (720p).
  const downloadMovie = () => {
    //console.log("La peli es: ", movie);
    window.open(`${movie.torrents[0].url}`, '_blank');
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
          <p className='description-text-limit'>Descripción: {movie.description_full}</p> {/* Lo seteo para que se vea 5 lineas */}

          <div className='d-flex'>
            <div className='container-btn-agregar'>
              <Button>Agregar +</Button>
            </div>
            <div className='container-btn-agregar'>
              <Button onClick={downloadMovie}>Descargar</Button>
            </div>
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
