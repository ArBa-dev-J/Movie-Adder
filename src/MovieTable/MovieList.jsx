import MovieTable from "./Movietable";

function MovieList({ movies, fetchData }) {
  return (
    <>
      <MovieTable movies={movies} fetchData={fetchData} key={movies.id} />
    </>
  );
}

export default MovieList;
