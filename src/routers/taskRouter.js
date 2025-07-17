import express from "express";
import {
  deleteTask,
  getTask,
  insertTask,
  updateTask,
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
    const { _id, ...rest } = req.body;
    const updated = await updateTask(_id, rest);
    res.json({
      status: "success",
      message: "response from put",
      updated,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/:_id", async (req, res, next) => {
  const { _id } = req.params;
  const deleted = await deleteTask(_id);

  res.json({
    status: "success",
    message: "your task has been deleted",
    deleted,
  });
});

export default router;
