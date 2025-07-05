import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/login`,
        data,
        { withCredentials: true }
      );
      console.log(res);
      toast.success("User logged in");
      navigate("/alltask");
    } catch (err) {
      if (err.response?.status == 400) {
        alert(err.response.data.message);
      } else {
        console.log(err);
        alert("login failed");
      }
    } finally {
      setIsLoading(false);
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
          Logging In...
        </p>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4 dark:bg-gray-700">
      <p className="text-2xl font-bold dark:text-white">
        Sign In to your Account
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-7 p-4 w-screen max-w-sm"
      >
        <div className="flex flex-col items-start gap-2 w-full">
          <label className="dark:text-white">Email</label>
          <input
            className="border-gray-400 border-1 focus:outline-blue-400 focus:outline-2 w-full rounded-md h-8 dark:text-white"
            onChange={handleChange}
            type="email"
            name="email"
            required
          />
        </div>
        <div className="flex flex-col items-start gap-2 w-full">
          <label className="dark:text-white">Password</label>
          <input
            className="border-gray-400 border-1 focus:outline-blue-400 focus:outline-2 w-full rounded-md h-8 dark:text-white"
            onChange={handleChange}
            type="password"
            name="password"
            required
          />
        </div>
        <button
          type="submit"
          className="rounded-lg w-full py-1.5 bg-blue-600 text-white hover:bg-blue-500 transition-colors"
        >
          Sign In
        </button>
        <p className="dark:text-white">
          Don't have account?{" "}
          <a href="/register" className="text-blue-800 dark:text-blue-400">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
