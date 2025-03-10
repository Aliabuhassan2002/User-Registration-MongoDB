const express = require("express");
const User = require("../models/User");
const userController = require("../controllers/userControllers");
const { authenticate } = require("../authMiddleware");

const router = express.Router();

// Create a new user
router.post("/register", userController.createUser);
router.get("/register", authenticate, userController.getUser);

// Get all users
// router.get("/register", userController.getUsers);

// // Update a user
// router.put("/register/:id", userController.updateUser);

module.exports = router;
