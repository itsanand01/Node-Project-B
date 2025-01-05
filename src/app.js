const express = require("express");
const app = express();

// app.use("/",(req, res) => {
//     res.send("Hello");
//   });

app.use("/test",(req, res) => {
  res.send("Hello World");
});
app.use("/tests",(req, res) => {
    res.send("Hello World hai");
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});  
