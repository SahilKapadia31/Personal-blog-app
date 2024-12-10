import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 text-white bg-gray-900">
      <nav className="py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          {/* Logo Section */}
          <div className="flex items-center justify-between">
            <Link to={'/'} className="text-xl font-bold text-purple-400">
              Blog App
            </Link>
            <button
              className="px-3 py-1 text-gray-300 border border-gray-700 border-solid rounded md:hidden"
              id="navbar-toggle"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className="flex-col hidden mt-3 md:flex md:flex-row md:ml-auto md:mt-0"
            id="navbar-collapse"
          >
            <Link
              to="/"
              className="p-2 text-gray-900 rounded lg:px-4 md:mx-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
            >
              My Feed
            </Link>
            <p
              className="p-2 text-gray-300 transition-colors duration-300 rounded lg:px-4 md:mx-2 hover:bg-gray-800 hover:text-white"
            >
              Discussion
            </p>
            <p
              className="p-2 text-gray-300 transition-colors duration-300 rounded lg:px-4 md:mx-2 hover:bg-gray-800 hover:text-white"
            >
              More
            </p>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        <h1 className="font-mono text-4xl text-purple-400">Personal Blogs</h1>
        <div className="flex items-center">
          <button className="flex items-center px-4 py-2 font-sans text-sm font-medium transition-all duration-300 transform border-0 rounded-full shadow-lg bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:scale-105 focus:outline-none">
            <Link
              to="/createblog"
              className="flex items-center text-white no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 stroke-current"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
              </svg>
              Create Blog
            </Link>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;