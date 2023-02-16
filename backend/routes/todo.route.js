const express = require("express");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { TodoModel } = require("../models/Todo.model");
const { UserModel } = require("../models/User.model");
const todoRouter = express.Router();

todoRouter.post("/", async (req, res) => {
  const { userID } = req.body;
  // console.log("userID:", userID);
  const todos = await TodoModel.find({ userID });
  // console.log("todos:", todos);
  res.send({ todos });
});

todoRouter.post("/add", async (req, res) => {
  const { title, category, id, userID } = req.body;
  try {
    const todo = new TodoModel({ title, category, id, userID });
    // console.log("todo:", todo);
    await todo.save();
    res.send({ res: "Added new todo", todo });
  } catch (err) {
    res.send({ res: err });
  }
});

todoRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(404).send({ res: "Invalid Request" });
    return;
  }
  try {
    await TodoModel.findByIdAndDelete({ _id: id });
    res.send({ res: "Deleted Successfully" });
  } catch (err) {
    res.send({ err });
  }
});

module.exports = { todoRouter };
