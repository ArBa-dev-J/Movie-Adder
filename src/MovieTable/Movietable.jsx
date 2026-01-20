function MovieTable({ movies }) {
  return (
    <>
      <div className="border w-[400px] flex flex-col items-center gap-2 pt-5 pb-5">
        <div>
          <h1 className="text-center">{movies.title}</h1>
        </div>
        <div className="text-center">
          <p>Genre</p>
          <p>
            {movies.genre[0]} {movies.genre[1]} {movies.genre[2]} 
            {movies.genre[3]} {movies.genre[4]} {movies.genre[5]}
          </p>
        </div>
        <div className="text-center">
          <p>Release Year</p>
          <p>{movies.realeseYear}</p>
        </div>
        <div className="text-center">
          <p>Rating</p>
          <p>{movies.Rating}</p>
        </div>
      </div>
    </>
  );
}

export default MovieTable;
