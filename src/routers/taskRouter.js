import express from "express";
import mongoose from "mongoose";

const router = express.Router();

//databse table(collection) selecting
const taskSchema = new mongoose.Schema({}, { strict: false });
const TaskCollection = mongoose.model("Task", taskSchema);

router.get("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "Here is the list of tasks",
    task: "fakeDB",
  });
});

router.post("/", async (req, res, next) => {
  console.log("--------");
  //Insert query
  const result = await TaskCollection(req.body).save;
  console.log(result);

  res.json({
    status: "success",
    message: "New task added successfully",
  });
});

router.patch("/", (req, res, next) => {
  const { id, type } = req.body;

  res.json({
    status: "success",
    message: "response from put",
    task: [],
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
