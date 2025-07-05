import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Lognavbar from "./Lognavbar";
import { toast } from "react-toastify";

const ViewTask = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/task/${id}`, {
        withCredentials: true,
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(()=> setIsLoading(false))
  }, [id]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/task/${id}`, {
        withCredentials: true,
      });
      toast.warn("task deleted");
      navigate("/alltask");
    } catch (err) {
      console.log(err);
      alert("error in deleting");
    } 
  };

  if (isLoading)
    return (
      <div className="flex flex-col gap-2 w-full h-screen justify-center items-center dark:bg-zinc-900">
        <img
          src="/taskify.png"
          alt="logo"
          className="h-24 rounded-full animate-spin duration-75"
        />
        <p className="text-2xl text-gray-600 text-center dark:text-white">
          Please wait...
        </p>
      </div>
    );

  return (
    <div className="flex flex-col gap-3 items-center min-h-screen dark:bg-stone-900 transition-colors duration-300">
      <Lognavbar />
      <p className="text-3xl mb-3 font-extrabold dark:text-white mt-[-0.7rem]">
        Your Task
      </p>
      <div className="w-screen flex justify-center px-7">
        <div className="flex flex-col items-start justify-center px-4 py-5 gap-4 border-2 border-gray-600 rounded-3xl h-[34rem] w-full max-w-2xl md:h-[33rem] md:w-[40rem] dark:text-white dark:border-white">
          <div className="flex gap-6 md:justify-between w-full">
            <h2 className="text-sm md:text-2xl">{data.title}</h2>
            <div className="flex flex-row gap-2 justify-between w-[40%] sm:w-[20%] md:w-[25%]">
              <Link
                to={`/edit/${data._id}`}
                className="border-blue-300 border-2 rounded-3xl px-4 py-1.5 text-blue-700 hover:bg-blue-400 hover:text-white transition-colors dark:hover:bg-blue-600 dark:text-blue-600"
              >
                Edit
              </Link>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(data.content);
                  toast.success('copied to clipboard')
                }}
                className="border-gray-400 border-2 rounded-3xl px-4 py-1.5 text-gray-600 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600 hover:text-white transition-colors"
              >
                Copy
              </button>
            </div>
          </div>
          <p className="whitespace-pre-wrap border rounded-md py-1 px-1.5 leading-relaxed w-full min-h-[58%]">
            {data.content}
          </p>
          <p>
            Due: <strong>{data.dueDate?.split("T")[0]}</strong>
          </p>
          <p className="dark:text-white">
            Status: <strong>{data.Status}</strong>
          </p>
          <div className="w-full flex justify-center mt-4 mb-2">
            <button
              onClick={() => handleDelete(data._id)}
              className="border-red-300 border-2 rounded-3xl w-full px-4 py-1.5 text-red-700 dark:text-red-400 hover:bg-red-400 dark:hover:bg-red-600 hover:text-white transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTask;
