import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loggedout from "./Loggedout";

const Lognavbar = () => {
  const [dropDown, setDropdown] = useState(false);

  const handleclick = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <nav className="flex justify-between items-center w-screen h-[5.1rem] rounded-md px-2 bg-black/5 mb-10">
      <img
        src="/taskify.png"
        alt="logo"
        className="h-[4.5rem] w-[5rem] flex justify-center"
      />

      <div className="relative">
        <img
          src="/user.png"
          alt="userlogo"
          onClick={handleclick}
          className="h-20 cursor-pointer"
        />
        {dropDown && (
          <div className="text-center border p-3 flex flex-col justify-center items-center gap-4 absolute right-0 top-full mt-2 w-[10rem] bg-white/88 rounded-2xl shadow-md z-50">
            <Loggedout/>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Lognavbar;
