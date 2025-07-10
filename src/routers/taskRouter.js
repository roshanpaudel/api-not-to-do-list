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
    message: "response from get",
  });
});
router.post("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "response from post",
  });
});
router.put("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "response from put",
  });
});
router.delete("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "response from delete",
  });
});

export default router;
