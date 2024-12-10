// BlogList.js

import React, { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";

const BlogList = () => {
  const { posts, loading } = useContext(BlogContext);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  if (loading) return <div className="mt-10 text-center">Loading...</div>;

  return (
    <div className={darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}>
      <div className="container px-6 py-10 mx-auto mt-24">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Blog Posts</h1>
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 text-white transition bg-indigo-600 rounded hover:bg-indigo-700"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <div className="max-w-3xl mx-auto">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post._id}
                className="mt-6 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
              >
                <div className="p-6">
                  <a
                    href="#"
                    className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800"
                  >
                    Election
                  </a>
                  <h1 className="mt-2 text-2xl font-bold text-black">{post.title}</h1>
                  <div className="flex items-center mt-3 text-sm text-gray-600 dark:text-gray-400">
                    <span className="mr-4">6 mins ago</span>
                    <span className="mr-4">By AliSher Azimi</span>
                    <span>Category: activewear</span>
                  </div>
                  <p className="my-4 text-base leading-6 text-black">
                    {post.content
                      ? `${post.content.substring(0, 300)}...`
                      : "No content available"}
                  </p>
                  <Link
                    to={`/posts/${post._id}`}
                    className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-2xl font-bold text-center">No posts available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;