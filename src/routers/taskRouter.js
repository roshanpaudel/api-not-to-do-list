import express from "express";
import mongoose from "mongoose";

const router = express.Router();

//databse table(collection) selecting
const taskSchema = new mongoose.Schema(
  {
    task: { type: String, required: true },
    hr: {
      type: Number,
      required: true,
      min: 1,
      max: [100, "Are you sure,its too high"],
    },
    type: { type: String, default: "entry", enum: ["entry", "bad"] },
  },
  { timestamps: true }
);
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
  try {
    console.log("--------");
    //Insert query
    const result = await TaskCollection(req.body).save();
    console.log(result);

    res.json({
      status: "success",
      message: "New task added successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: error.message,
    });
  }
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

router.delete("/:_id", async (req, res, next) => {
  const { _id } = req.params;
  const deleted = await TaskCollection.findByIdAndDelete(_id);

  res.json({
    status: "success",
    message: "your task has been deleted",
    deleted,
  });
});

export default router;
