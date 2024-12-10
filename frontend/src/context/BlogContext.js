import React, { createContext, useState, useEffect, useCallback } from "react";
import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  getPostById,
} from "../api";

// Create BlogContext
export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Helper function to fetch all posts
  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getAllPosts();
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch posts on mount
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Add a post
  const addPost = useCallback(
    async (postData) => {
      try {
        await createPost(postData);
        await fetchPosts(); // Re-fetch posts after adding
      } catch (error) {
        console.error("Error creating post:", error);
      }
    },
    [fetchPosts]
  );

  // Edit a post
  const editPost = useCallback(
    async (id, updatedData) => {
      try {
        await updatePost(id, updatedData);
        await fetchPosts(); // Re-fetch posts after editing
      } catch (error) {
        console.error("Error updating post:", error);
      }
    },
    [fetchPosts]
  );

  // Delete a post
  const removePost = useCallback(
    async (id) => {
      try {
        await deletePost(id);
        setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    },
    []
  );

  // Get a single post by ID
  const getPost = useCallback(async (id) => {
    try {
      const response = await getPostById(id);
      return response.data;
    } catch (error) {
      console.error("Error fetching post by ID:", error);
    }
  }, []);

  return (
    <BlogContext.Provider
      value={{
        posts,
        addPost,
        editPost,
        removePost,
        getPost,
        loading,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
