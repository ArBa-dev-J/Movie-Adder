import { useForm} from "react-hook-form";

function MovieForm({fetchData}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      genre: [],
      realeseYear: "",
    },
  });

  const onSumbit = async (data) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(
        "http://localhost:3000/movies",
        requestOptions,
      );
      if (response.ok) {
        reset();
        fetchData();
      } else {
        throw new Error("Data was not sent");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="flex flex-wrap justify-center pt-40">
      <form
        onSubmit={handleSubmit(onSumbit)}
        className="flex flex-row h-[30px] items-baseline-last gap-10"
      >
        <div>
          <label htmlFor="title" className="block text-center">
            Movie Title
          </label>
          <input
            type="text"
            name="title"
            {...register("title", { required: true })}
            className="border mr-2.5"
          />
          {errors.title && (
            <span className="text-red-700 font-bold block text-center">
              Movie title is required
            </span>
          )}
        </div>
        {/*MOVIE GENRE*/}
        <div>
          <div className="border flex gap-2.5">
            <div>
              <input
                type="checkbox"
                name="genre"
                value="Drama"
                {...register("genre", { required: true })}
              />
              <label htmlFor="rating">Drama</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="genre"
                value="Comedy"
                {...register("genre", { required: true })}
              />
              <label htmlFor="rating">Comedy</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="genre"
                value="Action"
                {...register("genre", { required: true })}
              />
              <label htmlFor="rating">Action</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="genre"
                value="Horror"
                {...register("genre", { required: true })}
              />
              <label htmlFor="rating">Horror</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="genre"
                value="Sci-fi"
                {...register("genre", { required: true })}
              />
              <label htmlFor="rating">Sci-fi</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="genre"
                value="Fantasy"
                {...register("genre", { required: true })}
              />
              <label htmlFor="rating">Fantasy</label>
            </div>
          </div>
          <div className="text-center">
            {errors.genre && (
              <span className="text-red-700 font-bold">
                Select at least one
              </span>
            )}
          </div>
        </div>
        {/*MOVIE REALESE DATE*/}
        <div>
          <label htmlFor="date" className="block">
            Movie release year
          </label>
          <input
            type="date"
            name="date"
            className="border mr-2.5"
            {...register("realeseYear", { required: true })}
          />
          <div>
            {errors.realeseYear && (
              <span className="text-red-700 font-bold">
                Select a release date
              </span>
            )}
          </div>
        </div>
        {/*MOVIE RATING*/}
        <div>
          <div className="border flex gap-2.5">
            <div>
              <input
                type="radio"
                name="rating"
                value="1"
                {...register("Rating", { required: true })}
              />
              <label htmlFor="rating">1</label>
            </div>
            <div>
              <input
                type="radio"
                name="rating"
                value="2"
                {...register("Rating", { required: true })}
              />
              <label htmlFor="rating">2</label>
            </div>
            <div>
              <input
                type="radio"
                name="rating"
                value="3"
                {...register("Rating", { required: true })}
              />
              <label htmlFor="rating">3</label>
            </div>
            <div>
              <input
                type="radio"
                name="rating"
                value="4"
                {...register("Rating", { required: true })}
              />
              <label htmlFor="rating">4</label>
            </div>
            <div>
              <input type="radio" name="rating" value="5" {...register("Rating", { required: true })}/>
              <label htmlFor="rating">5</label>
            </div>
          </div>
          <div className="text-center">
            {errors.realeseYear && (
              <span className="text-red-700 font-bold">
                Select a rating
              </span>
            )}
          </div>
        </div>
        {/* SUBMIT BUTTON */}
        <div>
          <input type="submit" className="border" />
        </div>
      </form>
    </section>
  );
}

export default MovieForm;
