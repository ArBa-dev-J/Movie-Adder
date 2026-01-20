import { useState, useEffect } from "react";
import MovieForm from "./MovieForm/MovieForm";
import MovieList from "./MovieTable/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/movies");

      if (!response.ok) {
        throw new Error(`Error! Response status: ${response.status}`);
      }

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
      <section className="flex flx-wrap gap-2.5 p-10 pt-20">
      {movies.map((movies) => (
        <MovieList movies={movies} fetchData={fetchData} key={movies.id} />
      ))}
      </section>
    </>
  );
}

export default App;
