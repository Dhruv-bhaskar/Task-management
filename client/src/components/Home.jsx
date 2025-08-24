import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between dark:bg-stone-900 bg-stone-50 transition-colors duration-300">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-37 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-stone-800 dark:text-stone-200">
          Welcome to <span className="text-blue-600">Taskify</span>
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-stone-600 dark:text-stone-300 max-w-2xl">
          Simplify your life, stay productive, and manage all your tasks in one
          place. Taskify is your smart companion for staying organized.
        </p>
        <Link
          to={"/register"}
          className="mt-8 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
        >
          Get Started 🚀
        </Link>
      </section>

      {/* Features Section */}
      <section className="mt-42 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-6xl">
        <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
          <p className="text-4xl">✅</p>
          <h3 className="mt-3 font-bold text-xl text-stone-700 dark:text-stone-200">Task Control</h3>
          <p className="text-stone-500 dark:text-stone-300 mt-2">
            Add, edit, and delete tasks effortlessly.
          </p>
        </div>
        <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
          <p className="text-4xl">🔍</p>
          <h3 className="mt-3 font-bold text-xl text-stone-700 dark:text-stone-200">Smart Sorting</h3>
          <p className="text-stone-500 dark:text-stone-300 mt-2">
            Filter & sort tasks by status, title, or due date.
          </p>
        </div>
        <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
          <p className="text-4xl">🌙</p>
          <h3 className="mt-3 font-bold text-xl text-stone-700 dark:text-stone-200">Dark Mode</h3>
          <p className="text-stone-500 dark:text-stone-300 mt-2">
            Enjoy light & dark themes synced with your device.
          </p>
        </div>
        <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
          <p className="text-4xl">💻</p>
          <h3 className="mt-3 font-bold text-xl text-stone-700 dark:text-stone-200">Cross Platform</h3>
          <p className="text-stone-500 dark:text-stone-300 mt-2">
            Works seamlessly on desktop, tablet, and mobile.
          </p>
        </div>
      </section>

      {/* Motivation Section */}
      <section className="mt-35 px-6 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-200">
          Stay Organized & Boost Productivity
        </h2>
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
          Taskify helps you focus on what matters most. Stop juggling sticky
          notes and scattered reminders — get everything in one place.
        </p>
        <div className="text-6xl mt-6">💡</div>
      </section>

      {/* Footer */}
      <footer className="mt-24 bg-black/90 w-full text-gray-200 py-10 px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h3 className="font-semibold text-lg border-b border-gray-400 pb-1">
            Contact Us
          </h3>
          <div className="flex gap-3 items-center justify-center md:justify-start">
            <img src="/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
            <a
              href="https://www.linkedin.com/in/dhruv-kumar-4206b0274/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Dhruv Kumar
            </a>
          </div>
          <div className="flex gap-3 items-center justify-center md:justify-start">
            <img src="/github.svg" alt="GitHub" className="h-6 w-6" />
            <a
              href="https://github.com/Dhruv-bhaskar"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Dhruv-bhaskar
            </a>
          </div>
          <p className="text-sm mt-3">
            © {new Date().getFullYear()} Taskify. All rights reserved.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <img
            src="/taskify.png"
            alt="Taskify Logo"
            className="h-28 w-28 rounded-full object-cover"
          />
        </div>
      </footer>
    </div>
  );
};

export default Landing;
