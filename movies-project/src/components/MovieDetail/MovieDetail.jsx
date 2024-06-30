import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        //console.log("El id de la pelicula elegida es: ", id);
        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
                if (!response.ok) {
                    throw new Error('Upsss, no se encontró la pelicula');
                }
                const data = await response.json();
                setMovie(data.data.movie);
            } catch (error) {
                console.error('Error: ', error);
            }
        };
    
        fetchMovie();
    }, [id]);
    
    if (!movie) return <div>Cargando...</div>;

    return (
        <div>
            <h2>{movie.title}</h2>
            <p>Año: {movie.year}</p>
            <p>Genero/s: {movie.genres}</p>
            <p>Descripción: {movie.description_full}</p>
            <img src={movie.medium_cover_image} alt={movie.title} />
            {movie.yt_trailer_code && (
                <iframe
                    title="trailer"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
    
}

export default MovieDetail;
