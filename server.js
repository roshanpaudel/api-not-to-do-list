import express from "express";
const PORT = 8000;
const app = express();

app.use("/", (req, res) => {
  res.json({
    status: "success",
    message: "todo",
  });
});
// app.get("/", (req, res) => {
//   console.log(res);
// });
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
