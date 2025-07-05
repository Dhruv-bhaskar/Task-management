import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lognavbar from "./Lognavbar";
import {toast} from 'react-toastify'

const CreateTask = () => {
  const [data, setData] = useState({
    title: "",
    content: "",
    dueDate: "",
    Status: "pending",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/task/create`,
        data,
        { withCredentials: true }
      );
      toast.success('Task created')
      navigate("/alltask");
    } catch (err) {
      if(err.response?.status == 400){
        alert(err.response.data.message)
      }else{
        alert("Task creation failed");
      console.log(err);
      }
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center min-h-screen dark:bg-stone-900 transition-colors duration-300">
      <Lognavbar/>
      <p className="text-2xl mb-4 font-extrabold dark:text-white">
        Create Your Task
      </p>
      <div className="w-screen flex justify-center px-7">
        <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-6 p-5 border-2 border-gray-600 rounded-3xl h-[30rem] w-full max-w-2xl md:h-[30rem] md:w-[40rem] dark:text-white dark:border-white"
      >
        <input
          className="focus:outline-none border-b border-gray-500 w-full p-2 dark:placeholder:text-gray-400 dark:border-white/65"
          type="text"
          placeholder="task name"
          name="title"
          onChange={handleChange}
          required
        />
        <div className="flex justify-start items-center w-full pl-2 gap-2">
          <span>Select date:</span>
          <input
            type="date"
            name="dueDate"
            onChange={handleChange}
            className="border-1 border-gray-500 rounded-md p-1 px-2 dark:border-white/65"
            required
          />
        </div>
        <textarea
          className="w-full p-2 focus:outline-none border-gray-500 border-1 rounded-md dark:placeholder:text-gray-400 dark:border-white/65"
          name="content"
          placeholder="description"
          onChange={handleChange}
          rows={30}
          required
        ></textarea>
        <div className="flex justify-start items-center w-full pl-2 gap-2">
          <span>Status:</span>
          <select
            name="Status"
            onChange={handleChange}
            className="border-1 border-gray-500 rounded-md p-1 px-2 dark:border-white/65"
            required
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
          Create Task
        </button>
      </form>
      </div>
    </div>
  );
};

export default CreateTask;
