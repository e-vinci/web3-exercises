import MovieItem from "components/MovieItem/MovieItem";
import "./Cinema.css";

const Cinema = ({ name, movies }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {movies.map((movie) => (
        <MovieItem key={movie.title} movie={movie} />
      ))}
    </ul>
  </div>
);

export default Cinema;
