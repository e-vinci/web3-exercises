import MovieCard from "components/MovieCard/MovieCard";
import { useMatch, useOutletContext } from "react-router-dom";

const MoviePage = () => {
  const { movies } = useOutletContext();

  const match = useMatch("/movies/:id");
  const movieId = Number(match?.params.id);
  if (isNaN(movieId)) return <p>Movie not found</p>;

  const movieFound = movies.find((movie) => movie.id === movieId);

  if (!movieFound) return <p>Movie not found</p>;

  return <MovieCard movie={movieFound} />;
};

export default MoviePage;
