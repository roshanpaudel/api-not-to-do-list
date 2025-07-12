import express from "express";

const router = express.Router();
let fakeDB = [];

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
  fakeDB.push(req.body);
  console.log(fakeDB);
  res.json({
    status: "success",
    message: "Message psuhed successfully",
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
