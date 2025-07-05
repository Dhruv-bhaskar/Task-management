import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Loggedout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/me`, {
          withCredentials: true,
        });
        setUser(res.data.username);
        console.log(res.data);
      } catch (err) {
        console.error("failed to fetch user details", err);
      }
    };

    fetchUser()
  }, []);

  async function handleLogout() {
    setIsLoading(true)
    try {
      await axios.get(`${import.meta.env.VITE_API_URL}/user/logout`, {
        withCredentials: true,
      });
      navigate("/");
    } catch (err) {
      alert("Error in logout");
    }finally {
      setIsLoading(false);
    }
  }

  if (isLoading)
    return (
      <div className="flex flex-col gap-2 w-full justify-center items-center dark:bg-zinc-900">
        <img
          src="/taskify.png"
          alt="logo"
          className="h-20 rounded-full animate-spin duration-75"
        />
        <p className="text-lg text-gray-600 text-center dark:text-white">
          Logging Out...
        </p>
      </div>
    );

  return (
    <div className="p-2 flex flex-col items-centre w-30 gap-4">
      <p className="text-lg font-semibold dark:text-white">Hi, {user}</p>
      <button
        onClick={handleLogout}
        className="cursor-pointer border-gray-700 border-1 w-15 ml-5 rounded-full text-sm py-1.5 pb-2 dark:text-white"
      >
        Logout
      </button>
    </div>
  );
};

export default Loggedout;
