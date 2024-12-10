import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addPost } = useContext(BlogContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setErrorMessage("Title and Content are required.");
      return;
    }

    try {
      await addPost({ title, content }); // Add post via BlogContext
      navigate("/"); // Redirect to the homepage
    } catch (error) {
      setErrorMessage("Error creating post. Please try again.");
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen py-6 text-gray-200 bg-gray-900 sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-6 py-10 bg-gray-800 shadow-lg rounded-3xl sm:p-12">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="flex items-center justify-center font-mono text-2xl text-white bg-indigo-500 rounded-full h-14 w-14">
                i
              </div>
              <div className="text-start">
                <h2 className="text-xl font-bold leading-relaxed">
                  Create New Post
                </h2>
                <p className="text-sm text-gray-400">
                  Fill out the details and click Create.
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-6 divide-y divide-gray-700">
              <div className="py-4 space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Post Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 text-gray-200 bg-gray-700 border border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter the post title"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Post Content
                  </label>
                  <textarea
                    className="w-full px-4 py-2 text-gray-200 bg-gray-700 border border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your content here..."
                    rows={5}
                  />
                </div>
              </div>
              {errorMessage && (
                <div className="mt-2 text-sm text-red-500">{errorMessage}</div>
              )}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Create Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;