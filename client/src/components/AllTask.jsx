import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AllTask = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchPost = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/task`, {
        withCredentials: true,
      });
      setData(res.data);
    } catch (err) {
      if(err.response?.status == 401){
        return alert(err.response.data.message)
      }
      else{
         console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/task/${id}`, {withCredentials:true});
      fetchPost();
    } catch (err) {

      console.log(err);
      alert("error in deleting");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {data.map((data) => (
        <div
          key={data._id}
          className="flex flex-col justify-center gap-5 border p-3"
        >
          <h3>{data.title}</h3>
          <p>{data.content}</p>
          <p>Status:{data.Status}</p>
          <Link to={`/edit/${data._id}`} className="text-center">
            Edit
          </Link>
          <button onClick={() => handleDelete(data._id)}>Delete</button>
          <button onClick={() => navigate(`/task/${data._id}`)}>see task</button>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
