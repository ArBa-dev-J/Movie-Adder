import MovieTable from "./Movietable";

function MovieList({ movies, fetchData, isOpen }) {
  return (
    <>
      <MovieTable movies={movies} fetchData={fetchData} isOpen={isOpen} key={movies.id} />
    </>
  );
}

export default MovieList;
