import React, {useEffect} from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="min-h-screen w-screen flex flex-col items-center dark:bg-stone-900 transition-colors duration-300">
      <div className="sticky top-0 z-50 w-[99%]">
        <Navbar />
      </div>
      <div className="w-full flex flex-col items-center mt-[-1.3rem] bg-black/5">
        <div className="flex flex-col gap-5 items-center mt-[10rem] py-2">
          <p className="text-6xl lg:text-8xl md:text-7xl text-stone-700 font-serif font-bold dark:text-stone-200">
            Taskify
          </p>
          <p className="text-2xl lg:text-4xl md:text-3xl text-stone-600 font-semibold dark:text-stone-200">
            Your task management buddy
          </p>
          <Link
            to={"/register"}
            className="lg:text-xl text-stone-700 dark:text-stone-200 dark:hover:border-white border-3 border-stone-500 rounded-3xl mt-7 p-2 hover:bg-stone-600 hover:text-white hover:border-black transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
        <div className="border-4 border-stone-400 bg-white/20 shadow-lg shadow-black/50 rounded-3xl flex flex-col gap-5 items-center py-6 mt-[10rem] w-[75%] dark:shadow-white/65">
          <p className="md:text-[1.7rem] text-stone-700 font-semibold dark:text-stone-200">
            Make your life easy with these features
          </p>
          <ul className="lg:text-xl flex flex-col items-center gap-5 mt-1">
            <li className="border-2 border-stone-500 rounded-2xl text-[1.2rem] p-1 text-stone-900 bg-stone-200 font-semibold w-[15rem] sm:w-[22rem] md:w-[28rem] shadow-black shadow-sm">
              ✅ Add, Edit, Delete tasks
            </li>
            <li className="border-2 border-stone-500 rounded-2xl text-[1.2rem] p-1 text-stone-900 bg-stone-200 font-semibold w-[15rem] sm:w-[22rem] md:w-[28rem] shadow-black shadow-sm">
              🔍 Filter & Sort by Status/Title/Date
            </li>
            <li className="border-2 border-stone-500 rounded-2xl text-[1.2rem] p-1 text-stone-900 bg-stone-200 font-semibold w-[15rem] sm:w-[22rem] md:w-[28rem] shadow-black shadow-sm">
              🌙 Light and Dark Mode (Device Theme)
            </li>
            <li className="border-2 border-stone-500 rounded-2xl text-[1.2rem] p-1 text-stone-900 bg-stone-200 font-semibold w-[15rem] sm:w-[22rem] md:w-[28rem] shadow-black shadow-sm">
              🖥️ Works on all devices
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 border-4 border-stone-400 rounded-3xl w-[75%] bg-white/20 shadow-lg shadow-black/50 py-6 mt-[5rem] dark:shadow-white/65">
          <p className="text-xl sm:text-3xl lg:text-4xl text-stone-700 font-semibold dark:text-stone-200">Manage your tasks with ease</p>
          <p className="text-lg sm:text-xl lg:text-2xl text-stone-700 font-semibold dark:text-stone-200">Stay Organized & Boost Productivity</p>
          <p className="text-5xl sm:text-6xl lg:text-7xl text-shadow-lg text-shadow-black/80">💡</p>
        </div>

        <footer className="text-gray-200 bg-black/80 w-full flex flex-col md:flex-row justify-around items-center py-6 mt-[5rem]">
          <div className="flex flex-col gap-5 mb-8 md:mb-0 md:w-1/3 text-center md:text-left">
            <div className="flex gap-3 items-center justify-center md:justify-start">
              <img
                className="h-7 w-7 rounded-full"
                src="/phone.webp"
                alt="contact"
              />
              <p className="text-white border-b-2 border-b-white pb-1">
                Contact Us
              </p>
            </div>
            <div className="flex flex-col gap-3 mt-5 pl-0 items-center md:items-start">
              <div className="flex gap-3 items-center">
                <img
                  className="h-7 w-7 rounded-full"
                  src="/linkedin.svg"
                  alt="LinkedIn"
                />
                <a target="blank" href="https://www.linkedin.com/in/dhruv-kumar-4206b0274/"><p>Dhruv Kumar</p></a>
              </div>
              <div className="flex gap-3 items-center">
                <img
                  className="h-7 w-7 rounded-full"
                  src="/github.svg"
                  alt="GitHub"
                />
                <a target="blank" href="https://github.com/Dhruv-bhaskar"><p>Dhruv-bhaskar</p></a>
              </div>
            </div>
            <p className="mt-5 text-sm">
              © {new Date().getFullYear()} - Present Bloggish. All rights
              reserved.
            </p>
          </div>

          <div className="flex-shrink-0">
            <img
              className="h-40 w-40 rounded-full object-cover"
              src="/taskify.png"
              alt="footer-logo"
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
