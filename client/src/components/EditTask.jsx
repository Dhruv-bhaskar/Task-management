import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Lognavbar from "./Lognavbar";
import {toast} from 'react-toastify'

const EditTask = () => {
  const [data, setData] = useState({
    title: "",
    content: "",
    dueDate: "",
    Status: "pending",
  });
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

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/task/${id}`, data, {
        withCredentials: true,
      });
      toast.info("task Updated");
      navigate("/alltask");
    } catch (err) {
      alert("error in updating");
      console.log(err);
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
      <Lognavbar/>
      <p className="text-2xl mb-4 font-extrabold dark:text-white">
        Update Your Task
      </p>
      <div className="w-screen flex justify-center px-7">
        <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-6 p-5 border-2 border-gray-600 rounded-3xl h-[30rem] w-full max-w-2xl md:h-[30rem] md:w-[40rem] dark:text-white dark:border-white"
      >
        <input
          className="focus:outline-none border-b border-gray-500 w-full p-2 dark:placeholder:text-gray-400 dark:border-white/65"
          type="text"
          placeholder="enter task name"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
        <div className="flex justify-start items-center w-full pl-2 gap-2">
          <span>Select date:</span>
          <input
            type="date"
            name="dueDate"
            value={data.dueDate?.split("T")[0]}
            onChange={handleChange}
            className="border-1 border-gray-500 rounded-md p-1 px-2 dark:border-white/65 dark:bg-gray-500"
          />
        </div>
        <textarea
          className="w-full p-2 focus:outline-none border-gray-500 border-1 rounded-md dark:placeholder:text-gray-400 dark:border-white/65"
          name="content"
          placeholder="description"
          value={data.content}
          onChange={handleChange}
          rows={30}
        ></textarea>
        <div className="flex justify-start items-center w-full pl-2 gap-2">
          <span>Status:</span>
          <select
            name="Status"
            value={data.Status}
            onChange={handleChange}
            className="border-1 border-gray-500 rounded-md p-1 px-2 dark:border-white/65"
          >
            <option value="pending" className="dark:bg-gray-400 dark:text-white">Pending</option>
            <option value="in-progress" className="dark:bg-gray-400 dark:text-white">In- progress</option>
            <option value="completed" className="dark:bg-gray-400 dark:text-white">Completed</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full h-[9rem] border-1 border-gray-500 rounded-md bg-stone-800 text-white text-md hover:bg-stone-600 transition-colors dark:border-white/65"
        >
          Update Task
        </button>
      </form>
      </div>
    </div>
  );
};

export default EditTask;
