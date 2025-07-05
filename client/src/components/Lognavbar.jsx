import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loggedout from "./Loggedout";

const Lognavbar = () => {
  const [dropDown, setDropdown] = useState(false);

  const handleclick = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <nav className="flex justify-between items-center w-screen h-[5.1rem] rounded-md px-4 bg-black/5 mb-10 dark:bg-gray-400/70 box-border transition-colors duration-300">
      <Link to={"/alltask"}>
        <img
          src="/taskify.png"
          alt="logo"
          className="h-[4.5rem] w-[5rem] flex justify-center"
        />
      </Link>

      <div className="relative">
        <div className="flex items-center gap-4">
          <Link to={'/alltask'} className="dark:text-white dark:bg-gray-400 text-gray-700 bg-gray-200 border-2 border-gray-400 rounded-2xl px-3 py-1.5 hover:bg-gray-600 hover:text-white transition-colors">
            Dashboard
          </Link>
          <img
            src="/user.png"
            alt="userlogo"
            onClick={handleclick}
            className="h-20 cursor-pointer"
          />
        </div>
        {dropDown && (
          <div className="text-center border p-3 flex flex-col justify-center items-center gap-4 absolute right-0 top-full mt-2 w-[10rem] bg-white/88 rounded-2xl shadow-sm z-50 dark:bg-black/60 dark:shadow-white">
            <Loggedout />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Lognavbar;
