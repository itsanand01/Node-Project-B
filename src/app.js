const express = require("express");
const app = express();

app.post("/test", (req, res) => {
  res.send("Hello World");
});

app.get("/user", (req, res) => {
  res.send({
    name: "Anand",
    age: 25,
    last: "chaurasia",
  });
});
app.post( "/user", (req, res) => {
  res.send("Hello User");
  });
  app.delete ("/user", (req, res) => {
    res.send("Delete User");
    });

// app.use("/tests",(req, res) => {
//     res.send("Hello World hai");
//   });

//   app.use("/",(req, res) => {
//     res.send("Hello");
//   });
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
