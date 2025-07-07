import express from "express";
const PORT = 8000;
const app = express();

// app.get("/", (req, res) => {
//   console.log(res);
// });
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server running at http://localhost/${PORT}`);
});
