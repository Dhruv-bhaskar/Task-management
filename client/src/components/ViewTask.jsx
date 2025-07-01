import React from 'react'
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";

const ViewTask = () => {

    const [data, setData] = useState(null);
    const {id} = useParams()

    useEffect(() => {
      axios.get(`${import.meta.env.VITE_API_URL}/task/${id}`, {withCredentials: true})
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    }, [id])
    
    if (!data) {
    return <div className="flex justify-center items-center min-h-screen">Loading task details...</div>;
  }

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <p>Due: {data.dueDate?.split('T')[0]}</p>
      <p>Status: <strong>{data.Status}</strong></p>
    </div>
  )
}

export default ViewTask
