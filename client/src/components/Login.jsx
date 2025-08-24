import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/user/login`,
        data,
        { withCredentials: true }
      );
      toast.success("Welcome back! 🎉");
      navigate("/alltask");
    } catch (err) {
      if (err.response?.status === 400) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Login failed. Try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading)
    return (
      <div className="flex flex-col gap-4 w-full h-screen justify-center items-center dark:bg-zinc-900 bg-gray-100">
        <img
          src="/taskify.png"
          alt="logo"
          className="h-20 w-20 rounded-full animate-spin"
        />
        <p className="text-xl text-gray-700 dark:text-white font-medium">
          Logging you in...
        </p>
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 dark:from-zinc-900 dark:to-zinc-800 p-6">
      <div className="bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl w-full max-w-md p-8 flex flex-col items-center gap-6">
        {/* Logo */}
        <img
          src="/taskify.png"
          alt="Taskify Logo"
          className="h-16 w-16 rounded-full object-cover shadow-md"
        />

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Sign in to Taskify
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Stay organized and boost your productivity 🚀
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full mt-4"
        >
          {/* Email */}
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-gray-500">📧</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              placeholder="Email address"
              className="pl-10 pr-3 py-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-zinc-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-gray-500">🔒</span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
              required
              placeholder="Password"
              className="pl-10 pr-10 py-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-zinc-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="rounded-lg py-2 w-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </form>

        {/* Footer Links */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-4">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
