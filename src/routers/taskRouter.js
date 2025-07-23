import express from "express";
import {
  deleteTask,
  getTask,
  insertTask,
  updateTask,
  deleteMultipleTasks,
} from "../models/taskModel/TaskSchema.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  const tasks = await getTask();
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
    const result = await insertTask(req.body);
    result._id
      ? res.json({
          status: "success",
          message: "New task added successfully",
        })
      : res.json({
          status: "error",
          message: "could't add data, retry later",
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
  try {
    console.log("🔍 Received PATCH request with body:", req.body);
    const { _id, ...rest } = req.body;
    const updated = await updateTask(_id, rest);
    res.json({
      status: "success",
      message: "Data update complete",
      updated,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// router.delete("/:_id", async (req, res, next) => {
//   const { _id } = req.params;
//   const deleted = await deleteTask(_id);

//   res.json({
//     status: "success",
//     message: "your task has been deleted",
//     deleted,
//   });
// });

router.delete("/", async (req, res) => {
  const ids = req.body;

  if (!Array.isArray(ids) || ids.length === 0) {
    return res
      .status(400)
      .json({ status: "error", message: "No valid IDs provided." });
  }

  try {
    const result = await deleteMultipleTasks(ids);

    res.json({
      status: "success",
      message: `${result.deletedCount} task(s) deleted successfully.`,
      result,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

export default router;
