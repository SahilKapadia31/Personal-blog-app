const express = require("express");
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const router = express.Router();

// CRUD routes
router.post("/", createPost); // Create post
router.get("/", getAllPosts); // Get all posts
router.get("/:id", getPostById); // Get post by ID
router.put("/:id", updatePost); // Update post
router.delete("/:id", deletePost); // Delete post

module.exports = router;
