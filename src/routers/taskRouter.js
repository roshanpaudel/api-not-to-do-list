import express from "express";
import mongoose from "mongoose";

const router = express.Router();

//databse table(collection) selecting
const taskSchema = new mongoose.Schema({}, { strict: false });
const TaskCollection = mongoose.model("Task", taskSchema);

router.get("/", async (req, res, next) => {
  const tasks = await TaskCollection.find();
  res.json({
    status: "success",
    message: "Here is the list of tasks",
    task: tasks,
  });
});

router.post("/", async (req, res, next) => {
  console.log("--------");
  //Insert query
  const result = await TaskCollection(req.body).save();
  console.log(result);

  res.json({
    status: "success",
    message: "New task added successfully",
  });
});

router.patch("/", async (req, res, next) => {
  const { _id, ...rest } = req.body;
  const updated = await TaskCollection.findByIdAndUpdate(_id, rest, {
    new: true,
  });
  res.json({
    status: "success",
    message: "response from put",
    updated,
  });
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  res.json({
    status: "success",
    message: "your task has been deleted",
    task: [],
  });
});

export default router;
