import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const ViewBlog = () => {
  const { id } = useParams();
  const { getPost, removePost } = useContext(BlogContext);
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPost(id);
        setPost(data);
      } catch (err) {
        setError("Failed to load the blog post.");
      }
    };
    fetchPost();
  }, [id, getPost]);

  const handleDelete = async () => {
    try {
      await removePost(id);
      navigate("/");
    } catch (err) {
      alert("Failed to delete the post.");
    }
  };

  if (error) return <div className="mt-10 text-center text-red-500">{error}</div>;
  if (!post) return <div className="mt-10 text-center text-gray-200">Loading...</div>;

  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = new Date(post.createdAt).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className="min-h-screen p-4 text-gray-200 bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="mb-5 text-3xl font-bold">{post.title}</h3>
          <p className="mb-5 text-lg leading-relaxed">{post.content}</p>
          <div className="flex items-center justify-between mb-5 text-sm text-gray-400">
            <span>Posted on {formattedDate}</span>
            <span>{formattedTime}</span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleDelete}
              className="px-4 py-2 text-white bg-red-600 rounded-md shadow-md hover:bg-red-700"
            >
              Delete
            </button>
            <button
              onClick={() => navigate(`/edit/${post._id}`)}
              className="px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700"
            >
              Edit Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;