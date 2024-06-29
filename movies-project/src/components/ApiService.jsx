import { useState, useEffect } from "react";
import MoviesList from "./MoviesList";

const ApiService = () => {

    const [movies, setMovies] = useState([])
    
    const getMovies = async () => {
        const url = "https://yts.mx/api/v2/list_movies.json?page=1&limit=10";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch movies');
            }
            const responseJson = await response.json();
            console.log(responseJson);
            setMovies(responseJson.data.movies);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }

    useEffect(() => {
        getMovies();
    },[])

    return (
        <MoviesList movies={movies} />
    )
}
export default ApiService;