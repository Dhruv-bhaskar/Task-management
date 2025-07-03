import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lognavbar from "./Lognavbar";

const AllTask = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState("");
  const [sortBy, setSortBy] = useState("");

  const fetchPost = async () => {
    try {
      console.log("Filter:", filterStatus, "Sort:", sortBy);
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/task`, {
        params: {
          status: filterStatus,
          sort: sortBy,
        },
        withCredentials: true,
      });
      setData(res.data);
    } catch (err) {
      if (err.response?.status == 401) {
        return alert(err.response.data.message);
      } else {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchPost();
  }, [filterStatus, sortBy]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/task/${id}`, {
        withCredentials: true,
      });
      fetchPost();
    } catch (err) {
      console.log(err);
      alert("error in deleting");
    }
  };

  return (
    <div className="flex flex-col items-center w-screen min-h-screen px-4 box-border dark:bg-stone-900 transition-colors duration-300">
      <Lognavbar />
      <p className="text-4xl mb-10 text-stone-600 font-bold text-shadow-sm dark:text-stone-200">
        Your Tasks
      </p>
      <div className="flex gap-4 mb-3">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border-2 border-gray-400 p-2 rounded-2xl dark:border-stone-700 dark:bg-stone-800 dark:text-white"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border-2 border-gray-400 p-2 rounded-2xl dark:border-stone-700 dark:bg-stone-800 dark:text-white"
        >
          <option value="">Sort By</option>
          <option value="date">By Date</option>
          <option value="title">By Title</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-8 w-full py-4">
        {data.length > 0 ? (
          data.map((data) => (
            <div className="w-full px-2 sm:px-4 md:px-10">
              <div
                key={data._id}
                className="flex flex-col justify-center gap-5 border-2 border-gray-500 rounded-2xl w-full max-w-7xl mx-auto px-4 py-6 md:px-7 bg-stone-50 shadow-lg dark:border-stone-700 dark:text-white dark:bg-stone-800 dark:shadow-white/50 transition-colors duration-300"
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-3 ml-2">
                    <p className="text-2xl md:text-3xl font-semibold border-b">
                      Title
                    </p>
                    <h3 className="text-lg md:text-xl">{data.title}</h3>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6 mr-2">
                    <Link
                      to={`/edit/${data._id}`}
                      className="border-blue-300 border-2 rounded-3xl px-4 py-1.5 text-blue-700 hover:bg-blue-400 hover:text-white transition-colors dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-600 "
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="border-red-300 border-2 rounded-3xl px-4 py-1.5 text-red-700 hover:bg-red-400 hover:text-white transition-colors dark:border-red-500 dark:text-red-400 dark:hover:bg-red-600"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(data.content);
                      }}
                      className="border-gray-500 border-2 rounded-3xl px-4 py-1.5 text-gray-600 hover:bg-gray-400 hover:text-white transition-colors dark:border-gray-500 dark:text-gray-400 dark:hover:bg-gray-600"
                    >
                      Copy
                    </button>
                  </div>
                </div>
                <p className="ml-2 text-sm md:text-base border border-gray-400 rounded-lg px-3 py-1 w-fit shadow-sm">
                  <strong>Status</strong>: {data.Status}
                </p>
                <button
                  onClick={() => navigate(`/task/${data._id}`)}
                  className="border-2 border-gray-400 rounded-3xl h-10 mb-3 bg-black/15 hover:bg-stone-500 hover:text-white font-bold hover:shadow-md transition-colors"
                >
                  see task
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-stone-700 dark:text-stone-200 text-2xl font-semibold mt-10 flex justify-center items-center h-[10rem] animate-pulse">
            😕 No tasks found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllTask;
