// server.js

const express = require("express");
const dbConnection = require("./config/db");
const Config = require("./config");
const postRoutes = require("./routes/postRoutes");
const cors = require("cors");

const app = express();
const PORT = Config.PORT || 5000;

// Connect to the database
(async () => {
  try {
    await dbConnection();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit process if DB connection fails
  }
})();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded data

// Routes
app.use("/api/posts", postRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});