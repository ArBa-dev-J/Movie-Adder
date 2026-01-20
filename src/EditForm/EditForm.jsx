import { useEffect } from "react";
import { useForm } from "react-hook-form";

function EditForm({ movies }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      title: "",
      genre: [],
      realeseYear: "",
      Rating: null,
    },
  });

  useEffect(() => {
    setValue("title", movies.title),
      setValue("genre", movies.genre),
      setValue("realeseYear", movies.realeseYear),
      setValue("Rating", movies.Rating)
  }, []);


  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <section className="border bg-gray-400 p-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-row justify-center h-7.5 items-baseline-last gap-10"
        >
          <div>
            <label htmlFor="title" {...register("title")} className="block text-center">
              Movie Title
            </label>
            <input type="text" name="title" className="border mr-2.5" />
          </div>
          {/*MOVIE GENRE*/}
          <div>
            <div className="border flex gap-2.5">
              <div>
                <input type="checkbox" {...register("genre")} name="genre" value="Drama" />
                <label htmlFor="rating">Drama</label>
              </div>
              <div>
                <input type="checkbox" {...register("genre")} name="genre" value="Comedy" />
                <label htmlFor="rating">Comedy</label>
              </div>
              <div>
                <input type="checkbox" {...register("genre")} name="genre" value="Action" />
                <label htmlFor="rating">Action</label>
              </div>
              <div>
                <input type="checkbox" {...register("genre")} name="genre" value="Horror" />
                <label htmlFor="rating">Horror</label>
              </div>
              <div>
                <input type="checkbox" {...register("genre")} name="genre" value="Sci-fi" />
                <label htmlFor="rating">Sci-fi</label>
              </div>
              <div>
                <input type="checkbox" {...register("genre")} name="genre" value="Fantasy" />
                <label htmlFor="rating">Fantasy</label>
              </div>
            </div>
          </div>
          {/*MOVIE REALESE DATE*/}
          <div>
            <label htmlFor="date"  {...register("realeseYear")} className="block">
              Movie release year
            </label>
            <input type="date" name="date" className="border mr-2.5" />
          </div>
          {/*MOVIE RATING*/}
          <div>
            <div className="border flex gap-2.5">
              <div>
                <input type="radio" {...register("Rating")} name="rating" value="1" />
                <label htmlFor="rating">1</label>
              </div>
              <div>
                <input type="radio" {...register("Rating")} name="rating" value="2" />
                <label htmlFor="rating">2</label>
              </div>
              <div>
                <input type="radio" {...register("Rating")} name="rating" value="3" />
                <label htmlFor="rating">3</label>
              </div>
              <div>
                <input type="radio" {...register("Rating")} name="rating" value="4" />
                <label htmlFor="rating">4</label>
              </div>
              <div>
                <input type="radio" {...register("Rating")} name="rating" value="5" />
                <label htmlFor="rating">5</label>
              </div>
            </div>
          </div>
          {/* SUBMIT BUTTON */}
          <div>
            <input type="submit" className="border" value="Update" />
          </div>
        </form>
      </section>
    </>
  );
}

export default EditForm;
