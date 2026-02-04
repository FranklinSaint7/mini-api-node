// src/routes/users.routes.js

const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser
} = require("../controllers/users.controller");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/:id", deleteUser);

module.exports = router;
