import MovieTable from "./Movietable";

function MovieList({ movies }) {
  return (
    <>
      <MovieTable movies={movies} key={movies.id} />
    </>
  );
}

export default MovieList;
