import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getAllData = async () => {
  const response = await axios.get();

  if (response.ok) {
    console.log("data deleted");
    fetchData();
  } else {
    throw new Error("Error");
  }

  return response.data;
};
