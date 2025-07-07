import express from "express";

const router = express.Router();

router.all("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "response form all",
  });
});

export default router;
