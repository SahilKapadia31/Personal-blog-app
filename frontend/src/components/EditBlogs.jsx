import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const EditBlogs = () => {
  const { id } = useParams();
  const { getPost, editPost } = useContext(BlogContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      if (post) {
        setTitle(post.title);
        setContent(post.content);
      }
    };
    fetchPost();
  }, [id, getPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setErrorMessage("Title and Content are required.");
      return;
    }

    try {
      await editPost(id, { title, content });
      navigate(`/posts/${id}`);
    } catch (error) {
      setErrorMessage("Error updating post. Please try again.");
    }
  };

  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-gray-900 text-white">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-gray-800 shadow-lg rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-purple-600 rounded-full flex justify-center items-center text-white text-2xl font-mono">
                i
              </div>
              <div className="block pl-2 font-semibold text-xl self-start">
                <h2 className="leading-relaxed">Edit Post</h2>
                <p className="text-sm text-gray-400">Edit your post and press save changes</p>
              </div>
            </div>
            <div className="divide-y divide-gray-600">
              <form onSubmit={handleSubmit}>
                <div className="py-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label className="leading-loose">Post Title</label>
                    <input
                      type="text"
                      className="px-4 py-2 bg-gray-700 text-white border border-gray-600 focus:ring-purple-500 focus:border-purple-500 w-full sm:text-sm rounded-md focus:outline-none"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Post title"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="leading-loose">Post Content</label>
                    <textarea
                      className="px-4 py-2 bg-gray-700 text-white border border-gray-600 focus:ring-purple-500 focus:border-purple-500 w-full sm:text-sm rounded-md focus:outline-none"
                      value={content}
                      placeholder="Write your content here..."
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                </div>

                {errorMessage && (
                  <div className="text-red-400 text-sm mt-2">{errorMessage}</div>
                )}

                <div className="pt-4 flex items-center space-x-4">
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBlogs;
