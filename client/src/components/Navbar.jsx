import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropDown, setDropdown] = useState(false);

  const handleclick = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <nav className="flex justify-between items-center w-full h-[5.1rem] rounded-md px-4 bg-black/5 mb-10 dark:bg-gray-400/70 transition-colors duration-300">
      <img
        src="/taskify.png"
        alt="logo"
        className="h-[4.5rem] w-[5rem] flex justify-center"
      />

      <div className="relative md:hidden">
        <img
          src="/hamurger.png"
          alt="dropdown"
          onClick={handleclick}
          className="h-7"
        />
        {dropDown && (
          <div className="border p-3 flex flex-col justify-center items-center gap-4 absolute right-0 top-full mt-2 w-[10rem] bg-black/5 rounded-2xl shadow-md z-50">
            <Link
              to={"/login"}
              className="border-2 p-2 rounded-2xl border-gray-500 bg-gray-400 text-white text-sm hover:bg-gray-500 hover:border-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              to={"/register"}
              className="border-2 p-2 rounded-2xl border-gray-500 bg-gray-400 text-white text-sm hover:bg-gray-500 hover:border-white transition-colors"
            >
              Get Strated
            </Link>
          </div>
        )}
      </div>
      <div className="md:h-[5rem] md:w-[13rem] md:flex md:items-center md:justify-between md:mr-2 hidden">
        <Link
          to={"/login"}
          className="border-2 p-2 rounded-2xl border-gray-500 bg-gray-400 text-white hover:bg-gray-500 hover:border-white transition-colors"
        >
          Sign In
        </Link>
        <Link
          to={"/register"}
          className="border-2 p-2 rounded-2xl border-gray-500 bg-gray-400 text-white hover:bg-gray-500 hover:border-white transition-colors"
        >
          Get Strated
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
