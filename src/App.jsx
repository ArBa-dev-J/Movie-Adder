import { useState, useEffect } from "react";
import MovieForm from "./MovieForm/MovieForm";
import MovieList from "./MovieTable/MovieList";
import EditForm from "./EditForm/EditForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/movies");
      const results = await response.json();
      setMovies(results);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MovieForm fetchData={fetchData} />
      <div>{error}</div>

      <section className="flex flex-wrap gap-2.5 p-10 pt-20">
        {movies.map((movie) => (
          <MovieList
            key={movie.id}
            movies={movie}
            fetchData={fetchData}
            isOpen={() => {
              setSelectedMovie(movie);
              setOpen(true);
            }}
          />
        ))}
      </section>

      {open && selectedMovie && (
        <EditForm
          movies={selectedMovie}
          fetchData={fetchData}
          isClosed={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default App;
