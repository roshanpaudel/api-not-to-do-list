import express from "express";
const PORT = 8000;
const app = express();

import taskRouter from "./src/routers/taskRouter.js";

app.use("/api/v1/tasks", taskRouter);

// app.get("/", (req, res) => {
//   console.log(res);
// });
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
