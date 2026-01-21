import x from "../assets/close.png";
import rewrite from "../assets/rewrite.png";

function MovieTable({ movies, fetchData, isOpen }) {
  // DELETE
  const deleteData = async (id) => {
    try {
      const requestOptions = {
        method: "DELETE",
      };

      const response = await fetch(
        "http://localhost:3000/movies/" + id,
        requestOptions,
      );
      if (response.ok) {
        console.log("data deleted");
        fetchData();
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="border w-100 flex flex-col items-center gap-2 pt-5 pb-5">
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
        {/* DELETE BUTTON */}
        <button
          type="button"
          className="relative left-[160px]"
          onClick={() => deleteData(movies.id)}
        >
          <img src={x} alt="x" />
        </button>
        <button type="button" onClick={() => isOpen()} className="relative left-[120px] bottom-[24px]"><img src={rewrite} alt="rewrite" /></button>
      </div>
    </>
  );
}

export default MovieTable;
