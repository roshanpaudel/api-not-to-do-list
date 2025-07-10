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
    message: "response form get",
  });
});
router.post("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "response form post",
  });
});
router.put("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "response form put",
  });
});

export default router;
