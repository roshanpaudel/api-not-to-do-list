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

//static serving
import path from "path";
const __dirname = path.resolve();

//serve the static file
app.use(express.static(path.join(__dirname, "dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

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
