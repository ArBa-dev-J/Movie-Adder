import { useEffect } from "react";
import { useForm } from "react-hook-form";
import x from "../assets/close.png";

function EditForm({ movies, isClosed, fetchData }) {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: "",
      genre: [],
      realeseYear: "",
      Rating: "",
    },
  });

  useEffect(() => {
    (setValue("title", movies.title),
      setValue("genre", movies.genre),
      setValue("realeseYear", movies.realeseYear),
      setValue("Rating", movies.Rating));
  }, []);

  const onSubmit = async (data) => {
    try {
      const requestOptions = {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      };

      const response = await fetch (
        `http://localhost:3000/movies/${movies.id}`,
        requestOptions
      );

      if (response.ok) {
        (isClosed(), fetchData());
      } else {
         throw new Error(`Error! Failed to update! ${response.status}`);
      }
    } catch (error){
      alert(error.message);
    }
  };

  return (
    <>
      <section className="border bg-gray-400 p-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-row justify-center h-7.5 items-baseline-last gap-10"
        >
          <div>
            <label htmlFor="title" className="block text-center">
              Movie Title
            </label>
            <input
              type="text"
              name="title"
              {...register("title")}
              className="border mr-2.5"
            />
          </div>
          {/*MOVIE GENRE*/}
          <div>
            <div className="border flex gap-2.5">
              <div>
                <input
                  type="checkbox"
                  {...register("genre")}
                  name="genre"
                  value="Drama"
                />
                <label htmlFor="rating">Drama</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  {...register("genre")}
                  name="genre"
                  value="Comedy"
                />
                <label htmlFor="rating">Comedy</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  {...register("genre")}
                  name="genre"
                  value="Action"
                />
                <label htmlFor="rating">Action</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  {...register("genre")}
                  name="genre"
                  value="Horror"
                />
                <label htmlFor="rating">Horror</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  {...register("genre")}
                  name="genre"
                  value="Sci-fi"
                />
                <label htmlFor="rating">Sci-fi</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  {...register("genre")}
                  name="genre"
                  value="Fantasy"
                />
                <label htmlFor="rating">Fantasy</label>
              </div>
            </div>
          </div>
          {/*MOVIE REALESE DATE*/}
          <div>
            <label htmlFor="date" className="block">
              Movie release year
            </label>
            <input
              type="date"
               {...register("realeseYear")}
              className="border mr-2.5"
            />
          </div>
          {/*MOVIE RATING*/}
          <div>
            <div className="border flex gap-2.5">
              <div>
                <input
                  type="radio"
                  {...register("Rating")}
                  name="Rating"
                  value="1"
                />
                <label htmlFor="rating">1</label>
              </div>
              <div>
                <input
                  type="radio"
                  {...register("Rating")}
                  name="Rating"
                  value="2"
                />
                <label htmlFor="rating">2</label>
              </div>
              <div>
                <input
                  type="radio"
                  {...register("Rating")}
                  name="Rating"
                  value="3"
                />
                <label htmlFor="Rating">3</label>
              </div>
              <div>
                <input
                  type="radio"
                  {...register("Rating")}
                  name="Rating"
                  value="4"
                />
                <label htmlFor="rating">4</label>
              </div>
              <div>
                <input
                  type="radio"
                  {...register("Rating")}
                  name="Rating"
                  value="5"
                />
                <label htmlFor="rating">5</label>
              </div>
            </div>
          </div>
          {/* SUBMIT BUTTON */}
          <div>
            <input type="submit" className="border" value="Update" />
          </div>
        </form>
        <div className="text-right relative bottom-40 left-30">
          <button type="button" onClick={isClosed}>
            <img src={x} alt="x" />
          </button>
        </div>
      </section>
    </>
  );
}

export default EditForm;
