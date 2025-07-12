import express from "express";

const router = express.Router();
let fakeDB = [
  {
    id: 1,
    task: "caring",
    hr: 20,
    type: "entry",
  },
  {
    id: 2,
    task: "loving",
    hr: 31,
    type: "entry",
  },
  {
    id: 3,
    task: "sharing",
    hr: 10,
    type: "entry",
  },
];

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
    task: fakeDB,
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

router.patch("/", (req, res, next) => {
  const { id, type } = req.body;
  fakeDB = fakeDB.map((item) => {
    if (item.id == id) {
      item.type = type;
      return item;
    } else {
      return item;
    }
  });
  res.json({
    status: "success",
    message: "response from put",
    task: fakeDB,
  });
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  fakeDB = fakeDB.filter((item) => item.id !== +id);
  res.json({
    status: "success",
    message: "your task has been deleted",
    task: fakeDB,
  });
});

export default router;
