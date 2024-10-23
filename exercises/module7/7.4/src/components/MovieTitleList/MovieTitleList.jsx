import { Link } from "react-router-dom";

const MovieTitleList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>{" "}
        </li>
      ))}
    </ul>
  );
};

export default MovieTitleList;
