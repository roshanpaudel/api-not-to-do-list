import express from "express";
import morgan from "morgan";
import cors from "cors";

const PORT = 8000;
const app = express();

import taskRouter from "./src/routers/taskRouter.js";

app.use(cors());
app.use(express.json());
app.use("/api/v1/tasks", taskRouter);
app.use(morgan("combined"));

//Connect MongoDB
import { connectMongoDB } from "./src/config/dbConfig.js";
connectMongoDB();

// app.get("/", (req, res) => {
//   console.log(res);
// });
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
