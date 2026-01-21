import { useState, useEffect } from "react";
import MovieForm from "./MovieForm/MovieForm";
import MovieList from "./MovieTable/MovieList";
import EditForm from "./EditForm/EditForm";

function App() {
  // GET DATA
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

  // OPEN AND CLOSE EDIT FORM

  const [open, setOpen] = useState(false);
  const isOpen = () => setOpen(true);
  const isClosed = () => setOpen(false);

  useEffect(() => {
    fetchData();
    isOpen();
    isClosed();
  }, []);

  return (
    <>
      <MovieForm fetchData={fetchData} />
      <div>{error}</div>
      <section className="flex flx-wrap gap-2.5 p-10 pt-20">
        {movies.map((movies) => (
          <MovieList movies={movies} fetchData={fetchData} isOpen={isOpen} key={movies.id} />
        ))}
      </section>
      {movies.map((movies) => (
        open ? <EditForm movies={movies} fetchData={fetchData} isClosed={isClosed} key={movies.id} /> : null
      ))}
    </>
  );
}

export default App;
