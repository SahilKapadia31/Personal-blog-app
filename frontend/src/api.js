import axios from "axios";

const api = axios.create({
  baseURL: "https://swiftrut-task-2-nine.vercel.app/api",
});

export const getAllPosts = () => api.get("/posts");
export const getPostById = (id) => api.get(`/posts/${id}`);
export const createPost = (data) => api.post("/posts", data);
export const updatePost = (id, data) => api.put(`/posts/${id}`, data);
export const deletePost = (id) => api.delete(`/posts/${id}`);

export default api;
