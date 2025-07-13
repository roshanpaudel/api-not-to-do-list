import express from "express";

const router = express.Router();

router.all("/", (req, res, next) => {
  //   res.json({
  //     status: "success",
  //     message: "response form all",
  //   });
  next();
});
router.get("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "Here is the list of tasks",
    task: "fakeDB",
  });
});

router.post("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "Message psuhed successfully",
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
