const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
  title: String,
  category: String,
  userID: String,
  id: Number,
});
const TodoModel = mongoose.model("todo", todoSchema);
module.exports = { TodoModel };
