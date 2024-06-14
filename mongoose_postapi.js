const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-comm");

const express = require("express");
const Student = require("./student");

const app = express();
app.use(express.json());
app.post("/create", async (req, resp) => {
  let data = new Student(req.body);
  let result = await data.save();
  console.log(result);
  resp.send(result);
});

app.get("/list", async (req, resp) => {
  let data = await Student.find();
  resp.send(data);
});

app.delete("/delete/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await Student.deleteOne(reeq, params);
  resp.send("done");
});

app.put("/update/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await Student.updateOne(
    {
      //condition
    },
    {
      $set: {
        /*update*/
      },
    }
  );
  resp.send(data);
});
app.listen(2000);
