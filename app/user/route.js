const express = require("express");
const {
  handlerGetUser,
  handlerPostUser,
  handlerPutUser,
  handlerDeleteUser,
} = require("./handler");
const router = express.Router();

// API 1 get users
router.get("/", handlerGetUser);

// API 2 create user
router.post("/", handlerPostUser);

// API 3 update user
router.put("/:id", handlerPutUser);

// API 4 delete user
router.delete("/:id", handlerDeleteUser);

module.exports = router;