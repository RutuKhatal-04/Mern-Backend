// We can search using post,put,get , delete methods

const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-comm");
const Student = require("./student");
const app = express();

app.use(express.json());

app.get("/search/:key", async (req, resp) => {
  let data = await Student.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
    ],
  });
  resp.send(data);
});

app.listen(5000);
